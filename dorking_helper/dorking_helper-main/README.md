

# Google Dorks for Bug Bounty
- reference: TakSec -> fixed not working ones / added more juicy
- live : [165.232.154.124/dorking.html](http://165.232.154.124/dorking.html)

---
### General for more endpoints/subdomians
```
site:example.com -www
```

### Sub-subdomain
```
site:*.*.example.com
```


### PHP extension w/ parameters

```
site:example.com ext:php inurl:?
```

### API Endpoints

```
site:example[.]com inurl:api | site:*/rest | site:*/v1 | site:*/v2 | site:*/v3
```

### Juicy Extensions

```
site:"example[.]com" ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:json
```

### .htaccess sensitive files
```
site:example.com inurl:"/phpinfo.php" | inurl:".htaccess" | inurl:".git" example.com -github
```


### DB files
```
site:example.com ext:sql | ext:dbf | ext:mdb
```

### conf files
```
site:example.com ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini
```

### backup
```
site:example.com ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup | ext:back
```


### High % inurl keywords

```
inurl:conf | inurl:env | inurl:cgi | inurl:bin | inurl:etc | inurl:root | inurl:sql | inurl:backup | inurl:admin | inurl:php site:example[.]com
```

### Server Errors

```
inurl:"error" | intitle:"exception" | intitle:"failure" | intitle:"server at" | inurl:exception | "database error" | "SQL syntax" | "undefined index" | "unhandled exception" | "stack trace" site:example[.]com
```

### XSS prone parameters

```
inurl:id= | inurl:idx= | inurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang= site:example.com
```

### open redirect 1
```
site:example.com inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir=  | inurl:page=
```

### open redirect 2 (cause too much -> low results)
```
site:example.com inurl:r= | inurl:r2= | inurl:ret= 
```
### SQLi Prone Parameters

```
inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= site:example.com
```

### SSRF Prone Parameters

```
inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain=  | inurl:page= site:example.com
```

### LFI Prone Parameters

```
inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= site:example.com
```

### RCE Prone Parameters

```
inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read=  | inurl:ping= site:example.com
```

### File upload endpoints

```
site:example.com "choose file"
```

### API Docs

```
inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:"example[.]com"
```

### admin pages
```
site:example.com inurl:admin | inurl:manager | inurl:administrator | intitle:admin | intext:admin
```


### login pages 
```
inurl:login | inurl:logout | inurl:signin | intitle:login | intitle:signin | inurl:secure site:example[.]com
```

### register pages
```
inurl:register | inurl:signup | intitle:register | intitle:signup site:example[.]com
```



### Test Environments

```
inurl:test | inurl:env | inurl:dev | inurl:staging | inurl:sandbox | inurl:debug | inurl:temp | inurl:internal | inurl:demo site:example.com
```

### sensitive documents 1-1
```
site:example.com ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv
```

### sensitive documents 1-2
```
site:example.com ext:pdf "계정" | "로그인" | "기본 비밀번호" | "번호" 
```

```
site:example.com ext:xlsx "계정" | "로그인" | "기본 비밀번호" | "번호" 
```

### sensitive documents 2-1 [need to fix]
```
site:example.com ext:txt | ext:xml | ext:xls | ext:json | ext:xlsx | intext:"confidential" | intext:"sensitive"
```
### sensitive documents 2-2
```
site:example.com ext:txt | ext:xml | ext:xls | ext:json | ext:xlsx 
```


### Sensitive Parameters

```
inurl:email= | inurl:phone= | inurl:password= | inurl:secret= site:example[.]com
```


### Install / Setup files
```
site:example.com inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config
```

### Finding Backdoors
```
site:example.com inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor
```
### SQL errors
```
site:example.com intext:'sql syntax near' | intext:'syntax error has occurred' | intext:'incorrect syntax near' | intext:'unexpected end of SQL command' | intext:'Warning: mysql_connect()' | intext:'Warning: mysql_query()' | intext:'Warning: pg_connect()'
```
### Apache STRUTS RCE
```
site:example.com ext:action | ext:struts | ext:do
```

### wordpress
```
site:example.com inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download
```

### phpinfo()
```
site:example.com ext:php intitle:phpinfo "published by the PHP Group"
```



### Cloud Storage

```
site:r2.cloudflarestorage.com "org[replace]"
```

```
site:.r2.dev "org[replace]"
```

```
site:s3.amazonaws.com "org[replace]"
```

```
site:blob.core.windows.net "example.com"
```

```
site:googleapis.com "example.com"
```

```
site:drive.google.com "example.com"
```

```
site:dev.azure.com "example[.]com"
```

```
site:onedrive.live.com "example[.]com"
```

```
site:digitaloceanspaces.com "example[.]com"
```

```
site:sharepoint.com "example[.]com"
```

```
site:s3-external-1.amazonaws.com "example[.]com"
```

```
site:s3.dualstack.us-east-1.amazonaws.com "example[.]com"
```

```
site:dropbox.com/s "example[.]com"
```

```
site:box.com/s "example[.]com"
```

```
site:docs.google.com inurl:"/d/" "example[.]com"
```

### JFrog Artifactory

```
site:jfrog.io "example[.]com"
```

### Firebase

```
site:firebaseio.com "example[.]com"
```


