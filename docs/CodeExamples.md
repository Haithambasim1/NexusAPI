
# API Code Examples

This document provides code examples for using the API with various programming languages and frameworks.

## JavaScript (Node.js)

### Email Validation

```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yourapi.p.rapidapi.com/api/email/validate',
  params: {
    email: 'user@example.com'
  },
  headers: {
    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
    'X-RapidAPI-Host': 'yourapi.p.rapidapi.com'
  }
};

async function validateEmail() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

validateEmail();
```

### Company Information

```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yourapi.p.rapidapi.com/api/company/info',
  params: {
    domain: 'example.com'
  },
  headers: {
    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
    'X-RapidAPI-Host': 'yourapi.p.rapidapi.com'
  }
};

async function getCompanyInfo() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getCompanyInfo();
```

### Sentiment Analysis

```javascript
const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://yourapi.p.rapidapi.com/api/ai/sentiment',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
    'X-RapidAPI-Host': 'yourapi.p.rapidapi.com'
  },
  data: {
    text: 'I really love this product, it is amazing!'
  }
};

async function analyzeSentiment() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

analyzeSentiment();
```

## Python

### Email Validation

```python
import requests

url = "https://yourapi.p.rapidapi.com/api/email/validate"

querystring = {"email":"user@example.com"}

headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "yourapi.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

### Company Information

```python
import requests

url = "https://yourapi.p.rapidapi.com/api/company/info"

querystring = {"domain":"example.com"}

headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "yourapi.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

### Sentiment Analysis

```python
import requests
import json

url = "https://yourapi.p.rapidapi.com/api/ai/sentiment"

payload = {
    "text": "I really love this product, it is amazing!"
}
headers = {
    "content-type": "application/json",
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "yourapi.p.rapidapi.com"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

## PHP

### Email Validation

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://yourapi.p.rapidapi.com/api/email/validate?email=user%40example.com",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: yourapi.p.rapidapi.com",
		"X-RapidAPI-Key: YOUR_RAPIDAPI_KEY"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}
```

### Company Information

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://yourapi.p.rapidapi.com/api/company/info?domain=example.com",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: yourapi.p.rapidapi.com",
		"X-RapidAPI-Key: YOUR_RAPIDAPI_KEY"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}
```

### Sentiment Analysis

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://yourapi.p.rapidapi.com/api/ai/sentiment",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "POST",
	CURLOPT_POSTFIELDS => json_encode([
		'text' => 'I really love this product, it is amazing!'
	]),
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: yourapi.p.rapidapi.com",
		"X-RapidAPI-Key: YOUR_RAPIDAPI_KEY",
		"content-type: application/json"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}
```

## Java

### Email Validation

```java
import java.io.IOException;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class EmailValidation {
    public static void main(String[] args) throws IOException {
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
            .url("https://yourapi.p.rapidapi.com/api/email/validate?email=user%40example.com")
            .get()
            .addHeader("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY")
            .addHeader("X-RapidAPI-Host", "yourapi.p.rapidapi.com")
            .build();

        Response response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}
```

### Company Information

```java
import java.io.IOException;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class CompanyInfo {
    public static void main(String[] args) throws IOException {
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
            .url("https://yourapi.p.rapidapi.com/api/company/info?domain=example.com")
            .get()
            .addHeader("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY")
            .addHeader("X-RapidAPI-Host", "yourapi.p.rapidapi.com")
            .build();

        Response response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}
```

### Sentiment Analysis

```java
import java.io.IOException;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class SentimentAnalysis {
    public static void main(String[] args) throws IOException {
        OkHttpClient client = new OkHttpClient();

        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, "{\"text\":\"I really love this product, it is amazing!\"}");
        
        Request request = new Request.Builder()
            .url("https://yourapi.p.rapidapi.com/api/ai/sentiment")
            .post(body)
            .addHeader("content-type", "application/json")
            .addHeader("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY")
            .addHeader("X-RapidAPI-Host", "yourapi.p.rapidapi.com")
            .build();

        Response response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}
```

## Ruby

### Email Validation

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://yourapi.p.rapidapi.com/api/email/validate?email=user%40example.com")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["X-RapidAPI-Key"] = 'YOUR_RAPIDAPI_KEY'
request["X-RapidAPI-Host"] = 'yourapi.p.rapidapi.com'

response = http.request(request)
puts response.read_body
```

### Company Information

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://yourapi.p.rapidapi.com/api/company/info?domain=example.com")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["X-RapidAPI-Key"] = 'YOUR_RAPIDAPI_KEY'
request["X-RapidAPI-Host"] = 'yourapi.p.rapidapi.com'

response = http.request(request)
puts response.read_body
```

### Sentiment Analysis

```ruby
require 'uri'
require 'net/http'
require 'openssl'
require 'json'

url = URI("https://yourapi.p.rapidapi.com/api/ai/sentiment")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["X-RapidAPI-Key"] = 'YOUR_RAPIDAPI_KEY'
request["X-RapidAPI-Host"] = 'yourapi.p.rapidapi.com'
request.body = {
  "text": "I really love this product, it is amazing!"
}.to_json

response = http.request(request)
puts response.read_body
```

## Go

### Email Validation

```go
package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {
	url := "https://yourapi.p.rapidapi.com/api/email/validate?email=user%40example.com"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY")
	req.Header.Add("X-RapidAPI-Host", "yourapi.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(string(body))
}
```

### Company Information

```go
package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {
	url := "https://yourapi.p.rapidapi.com/api/company/info?domain=example.com"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY")
	req.Header.Add("X-RapidAPI-Host", "yourapi.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(string(body))
}
```

### Sentiment Analysis

```go
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {
	url := "https://yourapi.p.rapidapi.com/api/ai/sentiment"

	payload := strings.NewReader(`{"text":"I really love this product, it is amazing!"}`)

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("content-type", "application/json")
	req.Header.Add("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY")
	req.Header.Add("X-RapidAPI-Host", "yourapi.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(string(body))
}
```
