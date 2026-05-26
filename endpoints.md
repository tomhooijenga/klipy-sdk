GIF - Trending API
Use this endpoint to fetch the most popular and viral GIFs of the moment, automatically tailored to your user’s language and location.

Trending content is updated throughout the day and optimized for engagement across social, messaging, and keyboard experiences.

To monetize this feature, check out the Advertisements section

See our Demo App Source Code for an example of Trending API integration.

Query Parameters
page
integer
The requested page number

Minimum
1
Default value
1
per_page
integer
The number of content items per page

Minimum
1
Maximum
50
Default value
24
customer_id
string
A unique user identifier in your system. Please make sure that the value remains consistent for the same user.

locale
string
Country code / language of the customer ISO 3166 (ge; us; uk; ru etc) (Alpha-2) (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)

format_filter
string
Comma-separated list of desired formats. Results will include only these formats, even if other formats exist. Possible values: gif, webp, jpg, mp4, webm.

content_filter
string
Specify the content safety filter level. The accepted values are off, low, medium, and high.

Path Parameters
app_key
string
Required
The unique app key issued by KLIPY for your system

ResponseExpand all
200
Object
Response Attributes
result
boolean
data
object
Show child attributes

Was this section helpful?
Yes
No
GET

/api/v1/{app_key}/gifs/trending?page={page}&per_page={per_page}&customer_id={customer_id}&locale={locale}&format_filter=&content_filter={content_filter}

cURL


curl --location --globoff 'https://api.klipy.com/api/v1/{app_key}/gifs/trending?page={page}&per_page={per_page}&customer_id={customer_id}&locale={locale}&content_filter={content_filter}' \
Response

200
{
"result": true,
"data": {
"data": [
{
"id": 8041071659142944,
"slug": "hello-hi-662",
"title": "Hello",
"file": {
"hd": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/um0L4dFH.gif",
"width": 498,
"height": 498,
"size": 4001918
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/eUbp2uNc.webp",
"width": 498,
"height": 498,
"size": 285228
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/LyWpim71.jpg",
"width": 498,
"height": 498,
"size": 19255
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/MCCBoQlZ.mp4",
"width": 498,
"height": 498,
"size": 119294
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/KkjHgST0WkvqPhrQBEj.webm",
"width": 498,
"height": 498,
"size": 79936
}
},
"md": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/8GCrVAB7.gif",
"width": 498,
"height": 498,
"size": 3721260
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/JUYsGsrc.webp",
"width": 498,
"height": 498,
"size": 643490
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/UsX8Vqtm.jpg",
"width": 498,
"height": 498,
"size": 20086
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/V6da8Awi.mp4",
"width": 498,
"height": 498,
"size": 119294
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/KYvHAODcgRYMmD.webm",
"width": 498,
"height": 498,
"size": 79936
}
},
"sm": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/y6iepZM7.gif",
"width": 220,
"height": 220,
"size": 314884
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/SE72470w.webp",
"width": 220,
"height": 220,
"size": 80118
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/uvntdY4w.jpg",
"width": 220,
"height": 220,
"size": 8560
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/3c2Tqd1S.mp4",
"width": 320,
"height": 320,
"size": 49565
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/E4zwjSqD1BNoXKAEm1UE.webm",
"width": 320,
"height": 320,
"size": 48827
}
},
"xs": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/A4bPjSsj.gif",
"width": 90,
"height": 90,
"size": 71468
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/Sp4pln3Z.webp",
"width": 90,
"height": 90,
"size": 25340
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/cGfi4U83.jpg",
"width": 90,
"height": 90,
"size": 2949
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/La0HaAzw.mp4",
"width": 150,
"height": 150,
"size": 20257
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/45Vik66JyFsr7B6NrYM.webm",
"width": 150,
"height": 150,
"size": 38333
}
}
},
"tags": [],
"type": "gif",
"blur_preview": "data:image/jpeg;base64,/9j//gAQTGF2YzU5LjM3LjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xAB6AAADAQEBAAAAAAAAAAAAAAAFBgMEBwEBAAIDAQAAAAAAAAAAAAAAAAQDAAIBBRAAAgEEAQMDAQkBAAAAAAAAAgEDAAUEEQYxEyESYUGScZHhUkIHMqEjFBEAAgMAAgICAwEAAAAAAAAAAgEDABEEITESE2EiQVEy/8AAEQgAHgAeAwESAAISAAMSAP/aAAwDAQACEQMRAD8A7AMw48RynvQCyevaow52KaYsk001r7am2Y7LNVTj/e+OPkP/ABgJKEZe29i99dUA5dZoLbzGOSSMRgnmRepLXhuqOVosqpRYyd/uuGDQ3ukcYxkhxLtK9gPNjycbEyx/hKhf1UOmuWAuORLFP19qIGteyohO4GNLugvU8tpRJG9T83PyKe4WfLUsCZxTrwl8PrXsPL7VmYcPeDuMfHnzpqrbZ62vdy54MnEhW2QffSLk3WeEUbZNLqt9a3HWF4uey/tRG9JUxfMaHkF1TmMXHDti90rDyT0qY1GaLX5vxoWSEzP6rr0oOTHFFi/1RNtbny3PsmW8KKQiBtiktvarBj3fFyc1zTYvcME2mWnQr+UC6pPqm70hKCUFud3n/IQj03bhyaaKP/KTyRNkL/TSpd7qeTdJ3ACgSfT4/qlx8jV+Xm2KAG6RyOGxLQ7Tqg5cgiu9v//Z"
}
],
"current_page": 1,
"per_page": 24,
"has_next": true
}
}

Show more
GIF - Search API
Use this endpoint to search KLIPY’s full GIF library by keyword or phrase. Results are ranked by relevance, popularity, and language context to ensure highly engaging, localized results.

The search engine supports fuzzy matching, custom pagination, and optional content filters to help you deliver the right result in every user flow.

Looking to monetize your search results? See the Advertisements section

Query Parameters
page
integer
The requested page number

Minimum
1
Default value
1
per_page
integer
The number of content items per page

Minimum
8
Maximum
50
Default value
24
q
string
The search keyword for finding relevant items

customer_id
string
A unique user identifier in your system. Please make sure that the value remains consistent for the same user.

locale
string
Country code / language of the customer ISO 3166 (ge; us; uk; ru etc) (Alpha-2) (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)

content_filter
string
Specify the content safety filter level. The accepted values are off, low, medium, and high.

format_filter
string
Comma-separated list of desired formats. Results will include only these formats, even if other formats exist. Possible values: gif, webp, jpg, mp4, webm.

Path Parameters
app_key
string
Required
The unique app key issued by KLIPY for your system

ResponseExpand all
200
Object
Response Attributes
result
boolean
data
object
Show child attributes

Was this section helpful?
Yes
No
GET

/api/v1/{app_key}/gifs/search?page={page}&per_page={per_page}&q={q}&customer_id={customer_id}&locale={country_code}&content_filter={content_filter}&format_filter=

cURL


curl --location --globoff 'https://api.klipy.com/api/v1/{app_key}/gifs/search?page={page}&per_page={per_page}&q={q}&customer_id={customer_id}&locale={country_code}&content_filter={content_filter}' \
Response

200
{
"result": true,
"data": {
"data": [
{
"id": 8041071659142944,
"slug": "hello-hi-662",
"title": "Hello",
"file": {
"hd": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/um0L4dFH.gif",
"width": 498,
"height": 498,
"size": 4001918
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/eUbp2uNc.webp",
"width": 498,
"height": 498,
"size": 285228
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/LyWpim71.jpg",
"width": 498,
"height": 498,
"size": 19255
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/MCCBoQlZ.mp4",
"width": 498,
"height": 498,
"size": 119294
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/KkjHgST0WkvqPhrQBEj.webm",
"width": 498,
"height": 498,
"size": 79936
}
},
"md": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/8GCrVAB7.gif",
"width": 498,
"height": 498,
"size": 3721260
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/JUYsGsrc.webp",
"width": 498,
"height": 498,
"size": 643490
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/UsX8Vqtm.jpg",
"width": 498,
"height": 498,
"size": 20086
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/V6da8Awi.mp4",
"width": 498,
"height": 498,
"size": 119294
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/KYvHAODcgRYMmD.webm",
"width": 498,
"height": 498,
"size": 79936
}
},
"sm": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/y6iepZM7.gif",
"width": 220,
"height": 220,
"size": 314884
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/SE72470w.webp",
"width": 220,
"height": 220,
"size": 80118
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/uvntdY4w.jpg",
"width": 220,
"height": 220,
"size": 8560
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/3c2Tqd1S.mp4",
"width": 320,
"height": 320,
"size": 49565
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/E4zwjSqD1BNoXKAEm1UE.webm",
"width": 320,
"height": 320,
"size": 48827
}
},
"xs": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/A4bPjSsj.gif",
"width": 90,
"height": 90,
"size": 71468
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/Sp4pln3Z.webp",
"width": 90,
"height": 90,
"size": 25340
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/cGfi4U83.jpg",
"width": 90,
"height": 90,
"size": 2949
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/La0HaAzw.mp4",
"width": 150,
"height": 150,
"size": 20257
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/45Vik66JyFsr7B6NrYM.webm",
"width": 150,
"height": 150,
"size": 38333
}
}
},
"tags": [],
"type": "gif",
"blur_preview": "data:image/jpeg;base64,/9j//gAQTGF2YzU5LjM3LjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xAB6AAADAQEBAAAAAAAAAAAAAAAFBgMEBwEBAAIDAQAAAAAAAAAAAAAAAAQDAAIBBRAAAgEEAQMDAQkBAAAAAAAAAgEDAAUEEQYxEyESYUGScZHhUkIHMqEjFBEAAgMAAgICAwEAAAAAAAAAAgEDABEEITESE2EiQVEy/8AAEQgAHgAeAwESAAISAAMSAP/aAAwDAQACEQMRAD8A7AMw48RynvQCyevaow52KaYsk001r7am2Y7LNVTj/e+OPkP/ABgJKEZe29i99dUA5dZoLbzGOSSMRgnmRepLXhuqOVosqpRYyd/uuGDQ3ukcYxkhxLtK9gPNjycbEyx/hKhf1UOmuWAuORLFP19qIGteyohO4GNLugvU8tpRJG9T83PyKe4WfLUsCZxTrwl8PrXsPL7VmYcPeDuMfHnzpqrbZ62vdy54MnEhW2QffSLk3WeEUbZNLqt9a3HWF4uey/tRG9JUxfMaHkF1TmMXHDti90rDyT0qY1GaLX5vxoWSEzP6rr0oOTHFFi/1RNtbny3PsmW8KKQiBtiktvarBj3fFyc1zTYvcME2mWnQr+UC6pPqm70hKCUFud3n/IQj03bhyaaKP/KTyRNkL/TSpd7qeTdJ3ACgSfT4/qlx8jV+Xm2KAG6RyOGxLQ7Tqg5cgiu9v//Z"
}
],
"current_page": 1,
"per_page": 24,
"has_next": true
}
}

Show more
GIF - Categories API
Use this endpoint to retrieve a list of curated categories that group KLIPY GIFs by common themes, moods, and reactions.

Categories can be shown as buttons, filters, or tabs in your UI, and are fully compatible with the Search API to help users discover content faster.

See our Demo App Source Code for an example of category-based integration.

Query Parameters
locale
string
Language of the user in xx_YY format, where: xx is the ISO 639-1 (https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes#Table) two-letter language code and YY is the ISO 3166-1 (https://en.wikipedia.org/wiki/ISO_3166-1#Codes) alpha-2 two-letter country code

Path Parameters
app_key
string
Required
The unique app key issued by KLIPY for your system

ResponseExpand all
200
Object
Response Attributes
result
boolean
data
object
Show child attributes

Was this section helpful?
Yes
No
GET

/api/v1/{app_key}/gifs/categories?locale={country_code}

cURL


curl --location --globoff 'https://api.klipy.com/api/v1/{app_key}/gifs/categories?locale={country_code}' \
Response

200
{
"result": true,
"data": {
"locale": "en_US",
"categories": [
{
"category": "smile",
"query": "smile",
"preview_url": "https://static.klipy.com/ii/e293a233a303a98e471f78d04e13a1b0/a5/fd/NnGoLmO8.gif"
},
{
"category": "aww",
"query": "aww",
"preview_url": "https://static.klipy.com/ii/925f17378dd1893b674a723c07535afe/1c/24/Oizp49sT.gif"
},
{
"category": "high five",
"query": "high five",
"preview_url": "https://static.klipy.com/ii/925f17378dd1893b674a723c07535afe/d9/e6/rtepipfC.gif"
},
{
"category": "good morning",
"query": "good morning",
"preview_url": "https://static.klipy.com/ii/ce286d05b8e1a47cd4f32b0e1b6dec0e/a6/f3/SEmLt8aA.gif"
},
{
"category": "good night",
"query": "good night",
"preview_url": "https://static.klipy.com/ii/f87f46a2c5aeaeed4c68910815f73eaf/af/77/35MgTkW5.gif"
}
]
}
}

Show more
GIF - Recent Items API [per user]
Use this endpoint to retrieve a list of GIFs recently used by a specific user. It’s ideal for implementing “Recently Used” sections in keyboards, messaging apps, or content pickers.

Pass a unique customer_id to fetch per-user history without storing content manually.

To include ads alongside recents, see the Advertisements section

Query Parameters
page
integer
The requested page number

Minimum
1
Default value
1
per_page
integer
The number of content items per page

Minimum
1
Maximum
32
Default value
10
Path Parameters
app_key
string
Required
The unique app key issued by KLIPY for your system

customer_id
string
Required
A unique user identifier in your system. Please make sure that the value remains consistent for the same user.

ResponseExpand all
200
Object
Response Attributes
result
boolean
data
object
Show child attributes

Was this section helpful?
Yes
No
GET

/api/v1/{app_key}/gifs/recent/{customer_id}?page={page}&per_page={per_page}

cURL


curl --location --globoff 'https://api.klipy.com/api/v1/{app_key}/gifs/recent/{customer_id}?page={page}&per_page={per_page}' \
Response

200
{
"result": true,
"data": {
"data": [
{
"id": 8041071659142944,
"slug": "hello-hi-662",
"title": "Hello",
"file": {
"hd": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/um0L4dFH.gif",
"width": 498,
"height": 498,
"size": 4001918
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/eUbp2uNc.webp",
"width": 498,
"height": 498,
"size": 285228
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/LyWpim71.jpg",
"width": 498,
"height": 498,
"size": 19255
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/MCCBoQlZ.mp4",
"width": 498,
"height": 498,
"size": 119294
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/KkjHgST0WkvqPhrQBEj.webm",
"width": 498,
"height": 498,
"size": 79936
}
},
"md": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/8GCrVAB7.gif",
"width": 498,
"height": 498,
"size": 3721260
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/JUYsGsrc.webp",
"width": 498,
"height": 498,
"size": 643490
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/UsX8Vqtm.jpg",
"width": 498,
"height": 498,
"size": 20086
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/V6da8Awi.mp4",
"width": 498,
"height": 498,
"size": 119294
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/KYvHAODcgRYMmD.webm",
"width": 498,
"height": 498,
"size": 79936
}
},
"sm": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/y6iepZM7.gif",
"width": 220,
"height": 220,
"size": 314884
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/SE72470w.webp",
"width": 220,
"height": 220,
"size": 80118
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/uvntdY4w.jpg",
"width": 220,
"height": 220,
"size": 8560
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/3c2Tqd1S.mp4",
"width": 320,
"height": 320,
"size": 49565
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/E4zwjSqD1BNoXKAEm1UE.webm",
"width": 320,
"height": 320,
"size": 48827
}
},
"xs": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/A4bPjSsj.gif",
"width": 90,
"height": 90,
"size": 71468
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/Sp4pln3Z.webp",
"width": 90,
"height": 90,
"size": 25340
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/cGfi4U83.jpg",
"width": 90,
"height": 90,
"size": 2949
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/La0HaAzw.mp4",
"width": 150,
"height": 150,
"size": 20257
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/45Vik66JyFsr7B6NrYM.webm",
"width": 150,
"height": 150,
"size": 38333
}
}
},
"tags": [],
"type": "gif",
"blur_preview": "data:image/jpeg;base64,/9j//gAQTGF2YzU5LjM3LjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xAB6AAADAQEBAAAAAAAAAAAAAAAFBgMEBwEBAAIDAQAAAAAAAAAAAAAAAAQDAAIBBRAAAgEEAQMDAQkBAAAAAAAAAgEDAAUEEQYxEyESYUGScZHhUkIHMqEjFBEAAgMAAgICAwEAAAAAAAAAAgEDABEEITESE2EiQVEy/8AAEQgAHgAeAwESAAISAAMSAP/aAAwDAQACEQMRAD8A7AMw48RynvQCyevaow52KaYsk001r7am2Y7LNVTj/e+OPkP/ABgJKEZe29i99dUA5dZoLbzGOSSMRgnmRepLXhuqOVosqpRYyd/uuGDQ3ukcYxkhxLtK9gPNjycbEyx/hKhf1UOmuWAuORLFP19qIGteyohO4GNLugvU8tpRJG9T83PyKe4WfLUsCZxTrwl8PrXsPL7VmYcPeDuMfHnzpqrbZ62vdy54MnEhW2QffSLk3WeEUbZNLqt9a3HWF4uey/tRG9JUxfMaHkF1TmMXHDti90rDyT0qY1GaLX5vxoWSEzP6rr0oOTHFFi/1RNtbny3PsmW8KKQiBtiktvarBj3fFyc1zTYvcME2mWnQr+UC6pPqm70hKCUFud3n/IQj03bhyaaKP/KTyRNkL/TSpd7qeTdJ3ACgSfT4/qlx8jV+Xm2KAG6RyOGxLQ7Tqg5cgiu9v//Z"
}
],
"current_page": 1,
"per_page": 10,
"has_next": true
}
}

Show more
GIF - Items API
Use this endpoint to retrieve one or more specific GIFs by their slugs. Ideal for restoring saved content, displaying favorites, or loading shared links.

Provide the Slugs parameter - each as a comma-separated list - to fetch multiple items in a single request.

Query Parameters
slugs
string
A comma-separated list of Slugs.

Path Parameters
app_key
string
Required
The unique app key issued by KLIPY for your system

ResponseExpand all
200
Object
Response Attributes
result
boolean
data
object
Show child attributes

Was this section helpful?
Yes
No
GET

/api/v1/{app_key}/gifs/items?slugs={value}

cURL


curl --location --globoff 'https://api.klipy.com/api/v1/{app_key}/gifs/items?slugs={value}' \
Response

200
{
"result": true,
"data": {
"data": [
{
"id": 8041071659142944,
"slug": "hello-hi-662",
"title": "Hello",
"file": {
"hd": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/um0L4dFH.gif",
"width": 498,
"height": 498,
"size": 4001918
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/eUbp2uNc.webp",
"width": 498,
"height": 498,
"size": 285228
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/LyWpim71.jpg",
"width": 498,
"height": 498,
"size": 19255
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/MCCBoQlZ.mp4",
"width": 498,
"height": 498,
"size": 119294
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/KkjHgST0WkvqPhrQBEj.webm",
"width": 498,
"height": 498,
"size": 79936
}
},
"md": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/8GCrVAB7.gif",
"width": 498,
"height": 498,
"size": 3721260
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/JUYsGsrc.webp",
"width": 498,
"height": 498,
"size": 643490
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/UsX8Vqtm.jpg",
"width": 498,
"height": 498,
"size": 20086
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/V6da8Awi.mp4",
"width": 498,
"height": 498,
"size": 119294
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/KYvHAODcgRYMmD.webm",
"width": 498,
"height": 498,
"size": 79936
}
},
"sm": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/y6iepZM7.gif",
"width": 220,
"height": 220,
"size": 314884
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/SE72470w.webp",
"width": 220,
"height": 220,
"size": 80118
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/uvntdY4w.jpg",
"width": 220,
"height": 220,
"size": 8560
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/3c2Tqd1S.mp4",
"width": 320,
"height": 320,
"size": 49565
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/E4zwjSqD1BNoXKAEm1UE.webm",
"width": 320,
"height": 320,
"size": 48827
}
},
"xs": {
"gif": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/A4bPjSsj.gif",
"width": 90,
"height": 90,
"size": 71468
},
"webp": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/Sp4pln3Z.webp",
"width": 90,
"height": 90,
"size": 25340
},
"jpg": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/cGfi4U83.jpg",
"width": 90,
"height": 90,
"size": 2949
},
"mp4": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/La0HaAzw.mp4",
"width": 150,
"height": 150,
"size": 20257
},
"webm": {
"url": "https://static.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/14/af/45Vik66JyFsr7B6NrYM.webm",
"width": 150,
"height": 150,
"size": 38333
}
}
},
"tags": [],
"type": "gif",
"blur_preview": "data:image/jpeg;base64,/9j//gAQTGF2YzU5LjM3LjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xAB6AAADAQEBAAAAAAAAAAAAAAAFBgMEBwEBAAIDAQAAAAAAAAAAAAAAAAQDAAIBBRAAAgEEAQMDAQkBAAAAAAAAAgEDAAUEEQYxEyESYUGScZHhUkIHMqEjFBEAAgMAAgICAwEAAAAAAAAAAgEDABEEITESE2EiQVEy/8AAEQgAHgAeAwESAAISAAMSAP/aAAwDAQACEQMRAD8A7AMw48RynvQCyevaow52KaYsk001r7am2Y7LNVTj/e+OPkP/ABgJKEZe29i99dUA5dZoLbzGOSSMRgnmRepLXhuqOVosqpRYyd/uuGDQ3ukcYxkhxLtK9gPNjycbEyx/hKhf1UOmuWAuORLFP19qIGteyohO4GNLugvU8tpRJG9T83PyKe4WfLUsCZxTrwl8PrXsPL7VmYcPeDuMfHnzpqrbZ62vdy54MnEhW2QffSLk3WeEUbZNLqt9a3HWF4uey/tRG9JUxfMaHkF1TmMXHDti90rDyT0qY1GaLX5vxoWSEzP6rr0oOTHFFi/1RNtbny3PsmW8KKQiBtiktvarBj3fFyc1zTYvcME2mWnQr+UC6pPqm70hKCUFud3n/IQj03bhyaaKP/KTyRNkL/TSpd7qeTdJ3ACgSfT4/qlx8jV+Xm2KAG6RyOGxLQ7Tqg5cgiu9v//Z"
}
]
}
}

Show more
GIF - Hide from Recent
Use this endpoint to remove a specific GIF from a user’s Recent list. Helpful for clearing sensitive content, handling undo actions, or improving personalization.

Pass the user’s customer_id and the slug of the GIF to be hidden.

Query Parameters
slug
string
Required
The slug of the GIF you want to delete from the list

Minimum
1
Default value
1
Path Parameters
app_key
string
Required
The unique app key issued by KLIPY for your system

customer_id
string
Required
A unique user identifier in your system. Please make sure that the value remains consistent for the same user.

Response
200
Object
Response Attributes
result
boolean
data
array
Was this section helpful?
Yes
No
DELETE

/api/v1/{app_key}/gifs/recent/{customer_id}?slug={slug}

cURL


curl --location --globoff --request DELETE 'https://api.klipy.com/api/v1/{app_key}/gifs/recent/{customer_id}?slug={slug}' \
Response

200
{
"result": true,
"data": []
}

GIF - Share Trigger API
Use this endpoint to log when a user shares a specific GIF. This improves personalization and helps surface more relevant content based on sharing behavior.

No personal data is collected. Just pass a stable customer_id (e.g. a hash or UUID) to associate the event with the user anonymously.

Path Parameters
app_key
string
Required
The unique app key issued by KLIPY for your system

slug
string
Required
The slug of the GIF you wish to use in order to trigger the 'share' action in the analytics system

Body Parameters
customer_id
string
A unique user identifier in your system. Please make sure that the value remains consistent for the same user.

q
string
The search string that leads to this share. Doesn't have a default value.

Required for the Search API. Keep empty when using the Trending API.

Response
200
Object
Response Attributes
result
boolean
Was this section helpful?
Yes
No
POST

/api/v1/{app_key}/gifs/share/{slug}

cURL


curl --location --globoff 'https://api.klipy.com/api/v1/{app_key}/gifs/share/{slug}' \
--data '{
"customer_id": "{customer_id}",
"q": "{q}"
}'
Response

200
{
"result": true
}

GIF - Report API
Use this endpoint to report a GIF that was flagged by a user on your platform. This helps KLIPY detect and review inappropriate or unwanted content to keep the experience safe and high quality.

Include a stable customer_id and a short reason string (e.g., "nsfw", "spam", "offensive").

Reason

Description

`nudity`

Nudity or sexually explicit content.

`violence`

Graphic violence or violent behavior.

`hate_speech`

Racist, homophobic, or hateful content.

`harassment`

Bullying, personal attacks, or targeted harassment.

`spam`

Repetitive, irrelevant, or misleading content.

`misinformation`

False claims, misleading text, or manipulated media.

`copyright`

Content believed to infringe on intellectual property rights.

`offensive`

Generally offensive or culturally inappropriate material.

`illegal`

Content that promotes or depicts illegal activity.

`broken`

Content doesn’t load, is corrupted, or is unplayable.

`low_quality`

Extremely low resolution or unreadable content.

`not_relevant`

Content doesn’t match the tag/query or is miscategorized.

`impersonation`

Fake identity, misleading branding, or impersonation.

`other`

Other issues not listed above. Free-text description recommended.

Path Parameters
app_key
string
Required
The unique app key issued by KLIPY for your system

slug
string
Required
The slug of the GIF you wish to report

Body Parameters
customer_id
string
A unique user identifier in your system. Please make sure that the value remains consistent for the same user.

reason
string
Required
The reason for reporting the content, providing context for KLIPY's review process.

Response
200
Object
Response Attributes
result