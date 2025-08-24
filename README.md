# 📖 MoviesDatabase API Documentation

## 🔹 API Overview

The **MoviesDatabase API** provides access to a wide range of movie data.
It allows developers to:

* Search movies by title
* Retrieve movie details by ID
* Fetch random movies
* Get metadata such as **actors, genres, release year, and images**

This API will be the backbone of the **CineSeek movie discovery app**, powering features like searching for movies and displaying details.

---

## 🔹 Version

* **Current Version:** v1
* **Base URL:** `https://moviesdatabase.p.rapidapi.com`

---

## 🔹 Available Endpoints

Here are some key endpoints from the API:

| Endpoint                   | Method | Description                                 |
| -------------------------- | ------ | ------------------------------------------- |
| `/titles`                  | `GET`  | Returns a list of movie titles              |
| `/titles/search/title`     | `GET`  | Search movies by title                      |
| `/titles/{id}`             | `GET`  | Retrieve details for a specific movie by ID |
| `/titles/random`           | `GET`  | Fetch a random movie                        |
| `/titles/{id}/main_actors` | `GET`  | Get the main actors of a movie              |

👉 Example:
`/titles/search/title?title=Inception` → returns data about the movie *Inception*.

---

## 🔹 Request and Response Format

**Request Example:**

```http
GET https://moviesdatabase.p.rapidapi.com/titles/tt1375666
x-rapidapi-key: YOUR_API_KEY
x-rapidapi-host: moviesdatabase.p.rapidapi.com
```

**Response Example:**

```json
{
  "results": [
    {
      "id": "tt1375666",
      "titleText": { "text": "Inception" },
      "releaseYear": { "year": 2010 },
      "primaryImage": {
        "url": "https://image.tmdb.org/t/p/w500/xyz.jpg"
      }
    }
  ]
}
```

---

## 🔹 Authentication

The MoviesDatabase API requires authentication for every request.
You must include the following headers:

```http
x-rapidapi-key: YOUR_API_KEY
x-rapidapi-host: moviesdatabase.p.rapidapi.com
```

⚠️ **Best Practice:** Do not hardcode your API key. Store it in environment variables (`.env.local` for Next.js projects).

---

## 🔹 Error Handling

Common error codes you may encounter:

* **400 Bad Request** → Invalid parameters in the request
* **401 Unauthorized** → Invalid or missing API key
* **404 Not Found** → No resource found for the given query or ID
* **429 Too Many Requests** → Exceeded quota or rate limit
* **500 Internal Server Error** → API server issue

Always handle errors gracefully and display user-friendly messages.

---

## 🔹 Usage Limits and Best Practices

* **Free tier:** \~500 requests/month (check RapidAPI pricing for details)
* Use **caching** for frequently requested data to reduce API calls
* Store your **API key in environment variables** for security
* Implement retry logic or user notifications for failed requests