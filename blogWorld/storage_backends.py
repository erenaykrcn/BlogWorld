from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage


class PublicMediaStorage(S3Boto3Storage):
    default_acl = 'public-read'
    location = 'media'
    file_overwrite = False


class StaticStorage(S3Boto3Storage):
	default_acl = 'public-read'
	#location = 'static'    