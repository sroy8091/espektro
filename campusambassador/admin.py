from django.contrib import admin
from django.shortcuts import HttpResponse
from .models import Signup
from .forms import SignupForm
# Register your models here.

def export_csv(modeladmin, request, queryset):
    import csv
    from django.utils.encoding import smart_str
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename=ca.csv'
    writer = csv.writer(response, csv.excel)
    response.write(u'\ufeff'.encode('utf8')) # BOM (optional...Excel needs it to open UTF-8 file properly)
    writer.writerow([
        smart_str(u"ID"),
        smart_str(u"full_name"),
        smart_str(u"college_Name"),
        smart_str(u"gender"),
        smart_str(u"Email_Address"),
        smart_str(u"PhoneNo"),
        smart_str(u"facebook_Link"),
    ])
    for obj in queryset:
        writer.writerow([
            smart_str(obj.pk),
            smart_str(obj.full_name),
            smart_str(obj.college_Name),
            smart_str(obj.gender),
            smart_str(obj.Email_Address),
            smart_str(obj.PhoneNo),
            smart_str(obj.facebook_Link),
        ])
    return response
export_csv.short_description = u"Export CSV"

class SignupAdmin(admin.ModelAdmin):
    actions = [export_csv]
    list_display=["full_name",'college_Name','Email_Address']
    form = SignupForm

admin.site.register(Signup, SignupAdmin)
