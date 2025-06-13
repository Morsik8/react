import { OffersList } from "../types/offer";

export const offersList : OffersList[] = [
    {
        'id': '0f8f14ec-5efe-4bdf-bba7-5a45e6f14e99',
        'title': 'Modern Loft in the Heart of Paris',
        'type': 'apartment',
        'price': 370,
        'previewImage': 'apartment1_1.jpg',
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 48.86861,
            'longitude': 2.342499,
            'zoom': 16
        },
        'isFavorite': true,
        'isPremium': false,
        'rating': 4.9,
    },
    {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "title": "Cozy Apartment in Amsterdam Center",
        "type": "apartment",
        "price": 420,
        "previewImage": "apartment2_1.jpg",
        "city": {
          "name": "Amsterdam",
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 52.372216,
          "longitude": 4.893168,
          "zoom": 16
        },
        "isFavorite": false,
        "isPremium": true,
        "rating": 4.7
      },
      {
        "id": "b2c3d4e5-f6a7-8901-bcde-f23456789012",
        "title": "Modern Flat near Cologne Cathedral",
        "type": "apartment",
        "price": 290,
        "previewImage": "apartment3_1.jpg",
        "city": {
          "name": "Cologne",
          "location": {
            "latitude": 50.937531,
            "longitude": 6.960279,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 50.939531,
          "longitude": 6.958279,
          "zoom": 16
        },
        "isFavorite": true,
        "isPremium": false,
        "rating": 4.5
      },
      {
        "id": "c3d4e5f6-a7b8-9012-cdef-345678901234",
        "title": "Luxury Loft in Dusseldorf",
        "type": "house",
        "price": 510,
        "previewImage": "apartment4_1.jpg",
        "city": {
          "name": "Dusseldorf",
          "location": {
            "latitude": 51.227741,
            "longitude": 6.773456,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 51.229741,
          "longitude": 6.771456,
          "zoom": 16
        },
        "isFavorite": false,
        "isPremium": true,
        "rating": 4.9
      },
      {
        "id": "4d5e6f7a-8b9c-0123-defg-456789012345",
        "title": "Charming Room in Hamburg",
        "type": "room",
        "price": 180,
        "previewImage": "apartment1_3.jpg",
        "city": {
          "name": "Hamburg",
          "location": {
            "latitude": 53.550341,
            "longitude": 9.993682,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 53.552341,
          "longitude": 9.991682,
          "zoom": 16
        },
        "isFavorite": true,
        "isPremium": false,
        "rating": 4.2
      },
      {
        "id": "5e6f7a8b-9c0d-1234-efgh-567890123456",
        "title": "Stylish Hotel in Brussels",
        "type": "hotel",
        "price": 230,
        "previewImage": "apartment1_4.jpg",
        "city": {
          "name": "Brussels",
          "location": {
            "latitude": 50.850346,
            "longitude": 4.351721,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 50.852346,
          "longitude": 4.349721,
          "zoom": 16
        },
        "isFavorite": false,
        "isPremium": true,
        "rating": 4.6
      }
]