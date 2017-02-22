from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy
from django.core.mail import send_mail
from django.views.generic import View
from .forms import UserForm, LoginForm, UserEditForm, UserDetailEditForm, team_create_form, TeamInviteForm,TeamAcceptForm
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.shortcuts import redirect
from .models import UserDetail, Team
from django.utils.crypto import get_random_string
from espektro.settings import domain, protocol

# Create your views here.
"""class UserFormView(View):
    form_class = UserForm

    template_name = 'profile/registration_form.html'

    # display blank form
    def get(self, request):
        form = self.form_class(None)
        detailform = self.UserDetailEditForm(None)
        return render(request, self.template_name, {'form': form,'detailform':detailform})

    #process form data
    def post(self, request):
        form = self.form_class(request.POST)
        detailform = self.UserDetailEditForm(reqeust.POST)

        if form.is_valid() and detailform.is_valid():
            user = form.save(commit=False)
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()
            userdetail = UserDetail.objects.create(user=user)
            userdetail = detailform.save()
        

            # if credentials are correct
            user = authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/profile/edit')

        return render(request, self.template_name, {'form': form, 'detailform':detailform})"""

def UserFormView(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        detailform = UserDetailEditForm(request.POST)

        if form.is_valid() and detailform.is_valid():
            user = form.save(commit=False)
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()
            userdetail = UserDetail.objects.create(user=user)
            userdetail = detailform.save()
        

            # if credentials are correct
            user = authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/profile/edit')
        return render(request, 'profile/registration_form.html', {'form': form, 'detailform':detailform})
    else:
        form = UserForm()
        detailform = UserDetailEditForm()
        return render(request, 'profile/registration_form.html', {'form': form, 'detailform':detailform})

@login_required
def edit(request):
    p=request.user
    if request.method == 'POST':
        #update details
        user_form = UserEditForm(instance=request.user,data=request.POST)
        user_detail_form = UserDetailEditForm(instance=p.userdetail,data=request.POST, files=request.FILES)

        if user_form.is_valid() and user_detail_form.is_valid():
            user_form.save()
            user_detail_form.save()
    else:
        #show details
        user_form = UserEditForm(instance=request.user)
        user_detail_form = UserDetailEditForm(instance=p.userdetail)


    return render(request, 'profile/edit.html', { 'user_form':user_form, 'user_detail_form':user_detail_form})


@login_required
def team_create(request):
    p = request.user
    created = False
    form = team_create_form(request.POST)
    if request.method == 'POST':
        if form.is_valid():
            new_team = form.save(commit=False)
            new_team.leader = p
            new_team.secret_key = get_random_string(20)
            new_team.number_of_members = new_team.event.NumberParticipants
            # new_team.save()
            # new_team.members.add(p)
            new_team.save()
            created = True
            return redirect('/profile/teams')
    else:
        form = team_create_form()
    return render(request, 'profile/teamcreate.html', { 'form' : form, 'created' : created})




@login_required
def send_invite(request, id):
    get_team = get_object_or_404(Team, id=id)
    sent = False
    if request.method == 'POST':
        form = TeamInviteForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            leader = request.user
            if not leader == get_team.leader:
                messages.error(request, "Sorry! You are not allowed to send this invite.")
            else:
                secret_key = get_team.secret_key
                subject = "Invitation to join team for Espektro"
                message = "Join us! {}://{}{}".format(protocol,domain,get_team.get_invite_url()) 
                send_mail(subject, message, 'espektro2017kgec@gmail.com', [cd['email']], fail_silently=False)
                sent = True

    else:
        form = TeamInviteForm()
    return render(request, 'profile/invite.html', {'get_team':get_team, 'form':form, 'sent':sent})

@login_required
def accept_invite(request, id, secret_key):
    get_team = get_object_or_404(Team, id=id, secret_key=secret_key)
    if request.method == 'POST':
        form = TeamAcceptForm(request.POST)
        get_user=request.user
        get_user=get_object_or_404(UserDetail, user=get_user)
        if(get_user in get_team.members.all()):
            messages.error(request, "You are already a part of this team.")
        elif(len(get_team.members.all()) > 1): #replace >1 with >= no of participants in team.event
            messages.error(request, "This team already has "+ str(len(get_team.members.all())) + " members.")
        else:
            get_team.members.add(get_user)
            messages.success(request, "You have been added to this team.")
    else:
        form = TeamAcceptForm()
        
    return render(request, 'profile/teamaccept.html', {'form': form})

class TeamDetail(generic.DetailView):
    model = Team
    template_name = 'profile/team_detail.html'

@login_required
def my_teams(request):
    usr = request.user
    usrteams = usr.team_set.all()
    return render(request, 'profile/my_teams.html', {'usrteams':usrteams})

# @login_required
# def user_info(request):
#     usr = request.user
#     events = Events.ob
