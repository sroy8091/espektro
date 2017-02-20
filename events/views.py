from django.shortcuts import render, HttpResponse
from events.models import Event, Event_Coordinator
import json

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

def techtix(request):
	if request.method == 'POST':
		post_text = request.POST.get('butt')
		response_data = {}

		response_data['text'] = "NEWLY RETRIEVED TEXT YEAHH"
		return HttpResponse(
			json.dumps(response_data),
			content_type="application/json"
			)
	else:
		return render(request, 'events/techtix.html')

def addcontent(request):
	if request.method == 'POST':
		post_text = request.POST.get('butt')
		response_data = {}

		response_data['text'] = "NEWLY RETRIEVED TEXT YEAHH"
		return HttpResponse(
			json.dumps(response_data),
			content_type="application/json"
			)
	else:
		return HttpResponse(
            json.dumps({"nothing to see": "this isn't happening"}),
            content_type="application/json"
			)