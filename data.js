const breweryData = [
  {
    'id': 1,
    'name': 'Great Divide Brewing Company',
    'beers': [
      {
        'id': 1,
        'name': 'Denver Pale Ale',
        'style': 'American Pale Wheat Ale(APA)',
        'size': '12 oz',
        'abv': '5.0%',
        'brewery_id': 1
      },
      {
        'id': 2,
        'name': 'Hibernation Ale',
        'style': 'Old Ale',
        'size': '12 oz',
        'abv': '8.7%',
        'brewery_id': 1
      },
      {
        'id': 3,
        'name': 'Whitewater',
        'style': 'American Pale Wheat Ale',
        'size': '12 oz',
        'abv': '6.1%',
        'brewery_id': 1
      }
    ]
  },
  {
    'id': 2,
    'name': 'Avery Brewing Company',
    'beers': [
      {
        'id': 4,
        'name': 'Raja',
        'style': 'American Double/ Imperial IPA',
        'size': '12 oz',
        'abv': '8.0%',
        'brewery_id': 2
      },
      {
        'id': 5,
        'name': 'Perzik Saison',
        'style': 'Saison/ Farmhouse Ale',
        'size': '12 oz',
        'abv': '6.4%',
        'brewery_id': 2
      }
    ]
  },
  {
    'id': 3,
    'name': 'Upslope Brewing Company',
    'beers': [
      {
        'id': 6,
        'name': 'Blood Orange Saison',
        'style': 'Saison/Farmhouse Ale',
        'size': '12 oz',
        'abv': '6.0%',
        'brewery_id': 3
      },
      {
        'id': 7,
        'name': 'Lee Hill Series Vol. 1 - Barrel Aged Brown Ale',
        'style': 'American Brown Ale',
        'size': '19.2 oz',
        'abv': '7.6%',
        'brewery_id': 3
      }
    ]
  },
  {
    'id': 4,
    'name': 'Epic Brewing',
    'beers': [
      {
        'id': 8,
        'name': 'Lil Brainless Raspberries',
        'style': 'Fruit/Vegetable Beer',
        'size': '12 oz',
        'abv': '5.2%',
        'brewery_id': 4
      },
    ]
  },
  {
    'id': 5,
    'name': 'Renegade Brewing Company',
    'beers': [
      {
        'id': 9,
        'name': 'Consilium',
        'style': 'American Pale Ale',
        'size': '12 oz',
        'abv': '6.6%',
        'brewery_id': 5
      },
    ]
  },
  {
    'id': 6,
    'name': 'Odyssey Beerwerks',
    'beers': [
      {
        'id': 10,
        'name': 'Clan Warrior',
        'style': 'Scotch Ale/Wee Heavy',
        'size': '12 oz',
        'abv': '8.7%',
        'brewery_id': 6
      },
      {
        'id': 11,
        'name': 'Psycho Penguin Vanilla Porter',
        'style': 'American Porter',
        'size': '12 oz',
        'abv': '5.4%',
        'brewery_id': 6
      },
      {
        'id': 12,
        'name': 'Perpetual Darkness',
        'style': 'Belgian Strong Darke Ale',
        'size': '12 oz',
        'abv': '9.2%',
        'brewery_id': 6
      }
    ]
  },
  {
    'id': 7,
    'name': 'High Hops Brewery',
    'beers': [
      {
        'id': 13,
        'name': 'The Golden One',
        'style': 'American Pilsner',
        'size': '12 oz',
        'abv': '6.3%',
        'brewery_id': 7
      },
      {
        'id': 14,
        'name': 'The Power of Zeus',
        'style': 'American Pale Ale (APA)',
        'size': '12 oz',
        'abv': '7.0%',
        'brewery_id': 7
      }
    ]
  },
  {
    'id': 8,
    'name': 'New Belgium Brewing Company',
    'beers': [
      {
        'id': 15,
        'name': 'Shift',
        'style': 'American Pale Lager',
        'size': '12 oz',
        'abv': '5.0%',
        'brewery_id': 8
      },
      {
        'id': 16,
        'name': '1554 Black Lager',
        'style': 'Euro Dark Lager',
        'size': '12 oz',
        'abv': '5.6%',
        'brewery_id': 8
      },
      {
        'id': 17,
        'name': 'Blue Paddle',
        'style': 'Czech pilsner',
        'size': '12 oz',
        'abv': '4.8%',
        'brewery_id': 8
      },
      {
        'id': 18,
        'name': 'California Route',
        'style': 'American Amber/Red Lager',
        'size': '12 oz',
        'abv': '5.5%',
        'brewery_id': 8
      },
      {
        'id': 19,
        'name': 'Snapshot',
        'style': 'American Pale Wheat Ale',
        'size': '16 oz',
        'abv': '5.2%',
        'brewery_id': 8
      },
    ]
  },
  {
    'id': 9,
    'name': 'Oskar Blues Brewery',
    'beers': [
      {
        'id': 20,
        'name': 'The CROWLER',
        'style': 'American Pilsner',
        'size': '32 oz',
        'abv': '???',
        'brewery_id': 9
      },
      {
        'id': 21,
        'name': 'Icey.P.A.',
        'style': 'American IPA',
        'size': '16 oz',
        'abv': '???',
        'brewery_id': 9
      },
      {
        'id': 22,
        'name': 'One Nut Brown',
        'style': 'American IPA',
        'size': '12 oz',
        'abv': '5.0%',
        'brewery_id': 9
      }
    ]
  },
  {
    'id': 10,
    'name': 'Ska Brewing Company',
    'beers': [
      {
        'id': 23,
        'name': 'Doppelbock',
        'style': 'American Pilsner',
        'size': '12 oz',
        'abv': '7.4%',
        'brewery_id': 10
      },
      {
        'id': 24,
        'name': 'Modus Hoperandi',
        'style': 'American IPA',
        'size': '12 oz',
        'abv': '6.8%',
        'brewery_id': 10
      }
    ]
  },
  {
    'id': 11,
    'name': 'Fate Brewing Company',
    'beers': [
      {
        'id': 25,
        'name': 'Sudice American Stout',
        'style': 'American Pilsner',
        'size': '16 oz',
        'abv': '7.0%',
        'brewery_id': 11
      },
      {
        'id': 26,
        'name': 'Parcae Belgian Style Pale Ale',
        'style': 'Belgian Pale Ale',
        'size': '16 oz',
        'abv': '5.0%',
        'brewery_id': 11
      },
      {
        'id': 27,
        'name': 'Norns Roggenbier',
        'style': 'Reggendier',
        'size': '16 oz',
        'abv': '5.0%',
        'brewery_id': 11
      },
      {
        'id': 27,
        'name': 'Moirai India Pale Ale',
        'style': 'American IPA',
        'size': '16 oz',
        'abv': '7.0%',
        'brewery_id': 11
      }
    ]
  },
  {
    'id': 12,
    'name': 'Wynkoop Brewing Company',
    'beers': [
      {
        'id': 28,
        'name': 'Pattys Chile Beer',
        'style': 'Chile Beer',
        'size': '12 oz',
        'abv': '4.2%',
        'brewery_id': 12
      },
      {
        'id': 29,
        'name': 'Colorajo Imperial Red Ale',
        'style': 'American Strong Ale',
        'size': '19.2 oz',
        'abv': '9.9%',
        'brewery_id': 12
      }
    ]
  },
  {
    'id': 13,
    'name': 'Redstone Meaderly',
    'beers': [
      {
        'id': 30,
        'name': 'Nectar of the Hops',
        'style': 'Mead',
        'size': '16 oz',
        'abv': '8.0%',
        'brewery_id': 13
      },
      {
        'id': 31,
        'name': 'Sunshine nectar',
        'style': 'Mead',
        'size': '12 oz',
        'abv': '8.0%',
        'brewery_id': 13
      },
      {
        'id': 32,
        'name': 'Black Raspberry Nectar',
        'style': 'Mead',
        'size': '16 oz',
        'abv': '8.0%',
        'brewery_id': 13
      }
    ]
  },
  {
    'id': 14,
    'name': 'Bonfire Brewing Company',
    'beers': [
      {
        'id': 33,
        'name': 'Dirtbag Dunkel',
        'style': 'Munich Dunkel Lager',
        'size': '16 oz',
        'abv': '4.9%',
        'brewery_id': 14
      },
      {
        'id': 33,
        'name': 'Kindler Pale Ale',
        'style': 'American Pale Ale (APA)',
        'size': '12 oz',
        'abv': '5.3%',
        'brewery_id': 14
      },
      {
        'id': 34,
        'name': 'Tent Pole Vanilla Porter',
        'style': 'Mead',
        'size': '16 oz',
        'abv': '6.1%',
        'brewery_id': 14
      },
      {
        'id': 35,
        'name': 'Awry Rye Pale Ale',
        'style': 'American Pale Ale (APA)',
        'size': '12 oz',
        'abv': '5.8%',
        'brewery_id': 14
      },
      {
        'id': 36,
        'name': 'Demshitz Brown Ale',
        'style': 'American Brown Ale',
        'size': '12 oz',
        'abv': '5.8%',
        'brewery_id': 14
      }
    ]
  },
  {
    'id': 15,
    'name': 'Dad & Dudes Breweria',
    'beers': [
      {
        'id': 37,
        'name': 'Dank IPA (2012)',
        'style': 'American IPA',
        'size': '16 oz',
        'abv': '6.5%',
        'brewery_id': 15
      }
    ]
  },
  {
    'id': 16,
    'name': 'Telluride Brewing Company',
    'beers': [
      {
        'id': 38,
        'name': 'Face Down Brown Ale',
        'style': 'American Brown Ale',
        'size': '12 oz',
        'abv': '5.7%',
        'brewery_id': 16
      },
      {
        'id': 39,
        'name': 'Tempter IPA',
        'style': 'American IPA',
        'size': '12 oz',
        'abv': '6.4%',
        'brewery_id': 16
      },
      {
        'id': 40,
        'name': 'Bridal Veil Rye Pale Ale',
        'style': 'American Pale Ale (APA)',
        'size': '12 oz',
        'abv': '5.5%',
        'brewery_id': 16
      }
    ]
  },
  {
    'id': 17,
    'name': 'Pateros Creek Brewing Company',
    'beers': [
      {
        'id': 41,
        'name': 'Stimulator Pale Ale',
        'style': 'American Pale Ale (APA)',
        'size': '16 oz',
        'abv': '5.3%',
        'brewery_id': 17
      },
      {
        'id': 42,
        'name': 'Old Town Ale',
        'style': 'Kolsch',
        'size': '16 oz',
        'abv': '4.5%',
        'brewery_id': 17
      },
      {
        'id': 43,
        'name': 'Car 21',
        'style': 'English Bitter',
        'size': '16 oz',
        'abv': '4.4%',
        'brewery_id': 17
      },
      {
        'id': 44,
        'name': 'Cache La Porter',
        'style': 'American Porter',
        'size': '16 oz',
        'abv': '4.4%',
        'brewery_id': 17
      }
    ]
  },
  {
    'id': 18,
    'name': 'Crazy Mountain Brewing Company',
    'beers': [
      {
        'id': 45,
        'name': 'Lava Lake Wit',
        'style': 'Witbier',
        'size': '12 oz',
        'abv': '5.2%',
        'brewery_id': 18
      }
    ]
  },
  {
    'id': 19,
    'name': 'Aspen Brewing Company',
    'beers': [
      {
        'id': 46,
        'name': 'This Seaons Blonde',
        'style': 'American Blonde Ale',
        'size': '12 oz',
        'abv': '5.6%',
        'brewery_id': 19
      },
      {
        'id': 47,
        'name': 'Independence Pass Ale',
        'style': 'American IPA',
        'size': '12 oz',
        'abv': '7.0%',
        'brewery_id': 19
      },
      {
        'id': 48,
        'name': 'Ellie Brown Ale',
        'style': 'American Brown Ale',
        'size': '12 oz',
        'abv': '5.5%',
        'brewery_id': 19
      }
    ]
  },
  {
    'id': 20,
    'name': 'Pug Ryan Brewery',
    'beers': [
      {
        'id': 49,
        'name': 'Morning Wood What (Current)',
        'style': 'American Pale Wheat Ale',
        'size': '12 oz',
        'abv': '5.9%',
        'brewery_id': 20
      },
      {
        'id': 50,
        'name': 'Over the Rail Pale Ale',
        'style': 'American Pale Ale (APA)',
        'size': '12 oz',
        'abv': '5.7%',
        'brewery_id': 20
      }
    ]
  },
  {
    'id': 21,
    'name': 'Steamworks Brewing Company',
    'beers': [
      {
        'id': 51,
        'name': 'Steam Engine Lager',
        'style': 'American Amber / Red Lager',
        'size': '12 oz',
        'abv': '5.7%',
        'brewery_id': 21
      },
      {
        'id': 52,
        'name': 'Third Eye Pale Ale',
        'style': 'American IPA',
        'size': '12 oz',
        'abv': '5.7%',
        'brewery_id': 21
      }
    ]
  },
  {
    'id': 22,
    'name': 'Breckenridge Brewery',
    'beers': [
      {
        'id': 53,
        'name': 'Avalanche Ale',
        'style': 'American Amber / Red Ale',
        'size': '12 oz',
        'abv': '5.4%',
        'brewery_id': 22
      },
      {
        'id': 54,
        'name': 'Hazen & Infused',
        'style': 'American Pale Ale (APA)',
        'size': '12 oz',
        'abv': '4.9%',
        'brewery_id': 22
      },
      {
        'id': 55,
        'name': 'Lucky U IPA',
        'style': 'American IPA',
        'size': '12 oz',
        'abv': '6.2%',
        'brewery_id': 22
      }
    ]
  },
  {
    'id': 23,
    'name': 'Silverton Brewery',
    'beers': [
      {
        'id': 56,
        'name': 'Red Mountain Ale',
        'style': 'American Amber /Red Ale',
        'size': '12 oz',
        'abv': '6.0%',
        'brewery_id': 23
      },
      {
        'id': 57,
        'name': 'ice Pick Ale',
        'style': 'American Pale Ale (APA)',
        'size': '12 oz',
        'abv': '6.0%',
        'brewery_id': 23
      }
    ]
  },
  {
    'id': 24,
    'name': 'EddyLine Brewery & Restaurant',
    'beers': [
      {
        'id': 58,
        'name': 'Crank Yanker IPA (2011)',
        'style': 'American IPA',
        'size': '16 oz',
        'abv': '7.8%',
        'brewery_id': 24
      }
    ]
  },
  {
    'id': 25,
    'name': 'AC Golden Brewing Company',
    'beers': [
      {
        'id': 59,
        'name': 'Colorado Native (2011)',
        'style': 'American Amber /Red Lager',
        'size': '12 oz',
        'abv': '5.5%',
        'brewery_id': 25
      }
    ]
  },
  {
    'id': 26,
    'name': 'Dolores River Brewery',
    'beers': [
      {
        'id': 60,
        'name': 'Dolores River Pale Ale',
        'style': 'American Pale Ale (APA)',
        'size': '16 oz',
        'abv': '???',
        'brewery_id': 26
      },
      {
        'id': 61,
        'name': 'Dolores River Dry Stout',
        'style': 'Irish Dry Stout',
        'size': '16 oz',
        'abv': '???',
        'brewery_id': 26
      }
    ]
  },
  {
    'id': 27,
    'name': 'Crabtree Brewing Company',
    'beers': [
      {
        'id': 62,
        'name': 'American Black Ale',
        'style': 'American Pale Ale (APA)',
        'size': '16 oz',
        'abv': '7.7%',
        'brewery_id': 27
      }
    ]
  },
  {
    'id': 28,
    'name': 'Twisted Pine Brewing Company',
    'beers': [
      {
        'id': 63,
        'name': 'Hoppy Boy',
        'style': 'American IPA',
        'size': '16 oz',
        'abv': '6.2%',
        'brewery_id': 28
      }
    ]
  },
  {
    'id': 29,
    'name': 'Crystal Springs Brewing Company',
    'beers': [
      {
        'id': 64,
        'name': 'Summertime Ale',
        'style': 'Kolsch',
        'size': '16 oz',
        'abv': '5.2%',
        'brewery_id': 29
      }
    ]
  },
  {
    'id': 30,
    'name': 'Revolution Brewing',
    'beers': [
      {
        'id': 65,
        'name': 'Vienna Lager',
        'style': 'Vienna Lager',
        'size': '16 oz',
        'abv': '4.6%',
        'brewery_id': 30
      },
      {
        'id': 66,
        'name': 'Jessie Garage',
        'style': 'American Pale Ale (APA)',
        'size': '16 oz',
        'abv': '5.6%',
        'brewery_id': 30
      },
      {
        'id': 67,
        'name': 'Rye Porter',
        'style': 'American Porter',
        'size': '16 oz',
        'abv': '???',
        'brewery_id': 30
      }
    ]
  }
];
