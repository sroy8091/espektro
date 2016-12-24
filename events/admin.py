from django.contrib import admin

# Register your models here.

from .models import Events, Event_Coordinator


class EventsAdmin(admin.ModelAdmin):
    list_display = ('EventType', 'EventName', 'EventImage',
                    'tagline', 'EventDetails', 'EventDate', 'StartTime','EndTime')
admin.site.register(Events, EventsAdmin)

class Event_CoordinatorAdmin(admin.ModelAdmin):
    list_display = ('CoordinatorName', 'CoordinatorImage',
                    'CoordinatorEmail', 'CoordinatorEvent')
admin.site.register(Event_Coordinator, Event_CoordinatorAdmin)





