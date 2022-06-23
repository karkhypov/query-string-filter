# Query String Filter

The App implements filters based on the query parameter. It simulates an ajax call on page load to fetch some data using the Promise API.

## Run application

1. Open a new bash shell
2. `cd query-string-filter`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`

#### Query parameters

- q = search term (eg. ?q=foo)
- co = company filter (eg. ?q=foo&co=facebook,linkedin,google )
- pos = position filter (eg. ?q=foo&co=facebook&pos=software+engineer,data+scientist)

## Example JSON Response

```json
[
  {
    "title": "a hard interview question",
    "tags": ["sql", "probability", "modeling"],
    "companies": ["facebook", "linkedin", "netflix"],
    "positions": ["software engineer", "Business Analyst", "Data Scientist"]
  },
  {
    "title": "easy question to solve",
    "tags": ["sql", "probability", "statistics"],
    "companies": ["facebook", "linkedin", "amazon", "google"],
    "positions": [
      "software engineer",
      "marketing Analyst",
      "Data Scientist",
      "ML Engineer"
    ]
  }
]
```

## Expected behavior

| url                                       |                                                                      output                                                                      |
| ----------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| /                                         |                                                             Show all question titles                                                             |
| /?q=foo                                   |                                      Show only question titles containing “foo” as a substring in the title                                      |
| ?q=foo&co=facebook                        |                          Show only questions containing “foo” in the title and where the company list includes facebook                          |
| ?q=foo&pos=software+engineer              |                     Show only questions containing “foo” in the title and where positions list includes “software engineer”                      |
| ?q=foo&&co=facebook&pos=software+engineer | Show only questions containing “foo” in the title and where positions list includes “software engineer” and the company list includes “facebook” |
