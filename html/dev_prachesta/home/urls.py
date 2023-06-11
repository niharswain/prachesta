from django.contrib import admin
from django.urls import path, include, re_path
from home import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('About', views.about, name='about'),
    path('our_people/', views.our_people, name='our_people'),
    path('know_prachesta/', views.know_prachesta, name='know_prachesta'),
    path('donate/', views.donate, name='donate'),
    path('joinUs/', views.joinUs, name='joinUs'),
    path('contactUs/', views.contactUs, name='contactUs'),
    path('joinPrachesta/',views.joinPrachesta, name='joinPrachesta'),
    re_path('^load_gallery', views.load_gallery, name='load_gallery'),

    path('terms_condition/', views.term_condition, name='termCondition'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

