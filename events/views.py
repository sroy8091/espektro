from django.shortcuts import render, HttpResponse, get_object_or_404, redirect
from events.models import Event, Event_Coordinator
import json


# from .forms import eventform

# Create your views here.


def event(request, event):
    e_list = Event.objects.filter(EventName=event)
    eco_list = Event_Coordinator.objects.filter(EventName=event)
    context = {'event': event, 'event_list': e_list, 'eventcoordinator_list': eco_list}
    return render(request, 'events.html', context)


def event_coordinator(request, id):
    coordinator_info = Event_Coordinator.objects.filter(CoordinatorEvent=event)
    context = {'c_info': coordinator_info}
    return render(request, 'events.html', context)


def techtix(request):
    if request.method == 'POST':
        usr = request.user
        if not usr.username:
            return redirect('profile/login')
        form = request.POST
        # print usr
        # print form
        # print form['register']
        message = ''
        if form['register'] > '0':
            key = form['register']
            evnt = get_object_or_404(Event, key=key, EventType='Techtix')
            if evnt.NumberParticipants == 1:
                if usr in evnt.Participants.all():
                    message = "You are already registered for the event " + evnt.EventName + '.'
                    print message
                else:
                    try:
                        print usr
                        x=usr.UserDetail
                        evnt.Participants.add(usr)
                        evnt.save()
                        message = "You have been registered for " + evnt.EventName + '.'
                    except:
                        message = "Update your profile in order to register."
                    print message
            else:
                usrteams = usr.team_set.all()
                list_events = []
                for team in usrteams:
                    list_events.append(team.event)
                if evnt in list_events:
                    message = "You already have a team for " + evnt.EventName + "."
                else:
                    try:
                        print usr
                        x=usr.UserDetail
                    except:
                        message = "Please update your profile details in order to register."
                    return redirect('/profile/team/create')
    else:
        pass
    return render(request, 'events/techtix.html')

def exotica(request):
    if request.method == 'POST':
        usr = request.user
        if not usr.username:
            return redirect('profile/login')
        form = request.POST
        # print usr
        # print form
        # print form['register']
        message = ''
        if form['register'] > '0':
            key = form['register']
            evnt = get_object_or_404(Event, key=key, EventType='Exotica')
            # print evnt
            if evnt.NumberParticipants == 1:
                if usr in evnt.Participants.all():
                    message = "You are already registered for the event " + evnt.EventName + '.'
                    print message
                else:
                    try:
                        print usr
                        x=usr.UserDetail
                        evnt.Participants.add(usr)
                        evnt.save()
                        message = "You have been registered for " + evnt.EventName + '.'
                    except:
                        message = "Update your profile in order to register."
                    print message
            else:
                usrteams = usr.team_set.all()
                list_events = []
                for team in usrteams:
                    list_events.append(team.event)
                if evnt in list_events:
                    message = "You already have a team for " + evnt.EventName + "."
                else:
                    try:
                        print usr
                        x=usr.UserDetail
                    except:
                        message = "Please update your profile details in order to register."
                    return redirect('/profile/team/create')
        return render(request, 'events/exotica.html', {'message': message})
    else:
        pass
    return render(request, 'events/exotica.html')
