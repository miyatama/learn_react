# outline

copy sqlite3.dll and  sqlite3.def to `~/anaconda3/DLLs/` and `~/anaconda3/envs/yourenv/DLLs`


```shell
# when not exists create .pip directory
mkdir ~/anaconda3/envs/drf_restqpi/.pip
cat << EOF >> ~/anaconda3/envs/drf_restqpi/pip.ini
[global]
trusted-host = pypi.python.org
               pypi.org
               files.pythonhosted.org
EOF
python -m pip install --upgrade pip
pip install django
pip install djangorestframework
pip install django-cors-headers
pip install pytz
```
