from django.contrib import admin

# Register your models here.

from .models import Event, Event_Coordinator


class EventAdmin(admin.ModelAdmin):
    list_display = ('EventType', 'EventName', 'EventImage',
                    'tagline', 'EventDetails', 'EventDate', 'StartTime','EndTime')
admin.site.register(Event, EventAdmin)

class Event_CoordinatorAdmin(admin.ModelAdmin):
    list_display = ('CoordinatorName', 'CoordinatorImage',
                    'CoordinatorEmail','CoordinatorPhone', 'CoordinatorEvent')
admin.site.register(Event_Coordinator, Event_CoordinatorAdmin)





