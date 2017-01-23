from django.shortcuts import render
from events.models import Event, Event_Coordinator

# Create your views here.


def event(request, event):

    e_list = Event.objects.filter(EventName=event)
   	eco_list=Event_Coordinator.objects.filter(EventName=event)
    context = {'event': event, 'event_list': e_list, 'eventcoordinator_list':eco_list}
    return render(request, 'events.html', context)


def event_coordinator(request, id):

    coordinator_info = Event_Coordinator.objects.filter(CoordinatorEvent=event)
    context = {'c_info': coordinator_info}
    return render(request, 'events.html', context)
