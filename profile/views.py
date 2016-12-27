from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy
from django.views.generic import View
from .forms import UserForm, LoginForm, UserEditForm, UserDetailEditForm
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from .models import UserDetail

# Create your views here.
class UserFormView(View):
    form_class = UserForm
    template_name = 'profile/registration_form.html'

    # display blank form
    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {'form': form})

    #process form data
    def post(self, request):
        form = self.form_class(request.POST)

        if form.is_valid():
            user = form.save(commit=False)
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()
            userdetail = UserDetail.objects.create(user=user)
        

            # if credentials are correct
            user = authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/profile/edit')

        return render(request, self.template_name, {'form': form})

def login_view(request):
        if request.method == 'POST':
            form = LoginForm(request.POST)
            if form.is_valid():
                username=form.cleaned_data['username']
                password=form.cleaned_data['password']
                user=authenticate(username=username, password=password)
                if user is not None:
                    if user.is_active:
                        login(request,user)
                        return redirect('profile:index')
                    else:
                        print("account diabled")
                else:
                    return render(request, 'profile/login.html', {'form':form})
        else:
            form = LoginForm()
            return render(request, 'profile/login.html', {'form':form})
        
@login_required
def edit(request):
        p=request.user
        if request.method == 'POST':
            #update details
            user_form = UserEditForm(instance=request.user,data=request.POST)
            user_detail_form = UserDetailEditForm(instance=p.userdetail,data=request.POST)

            if user_form.is_valid() and user_detail_form.is_valid():
                user_form.save()
                user_detail_form.save()

        else:
            #show details
            user_form = UserEditForm(instance=request.user)
            user_detail_form = UserDetailEditForm(instance=p.userdetail)

        return render(request, 'profile/edit.html', { 'user_form':user_form, 'user_detail_form':user_detail_form})



