CREATE TABLE apartments (
  id          INTEGER PRIMARY KEY,
  name        TEXT    NOT NULL,
  rooms       INTEGER NOT NULL,
  price       INTEGER NOT NULL,
  description TEXT    NOT NULL
);

INSERT INTO apartments (name, rooms, price, description)
VALUES (
  'Alex Apartments near Independence Square',
  1,
  1500,
  'Located right in the centre of Kyiv, a 5-minute walk to Maidan Nezalezhnosti Square, Alex Apartments near Independence Square offer self-catering accommodation with free Wi-Fi.'
), (
  'Inn Home Apartments - Ocean Plaza area',
  1,
  700,
  'At the apartment complex, every unit includes a wardrobe, a flat-screen TV, a private bathroom, bed linen and towels. Free WiFi is available to all guests, while some rooms are equipped with a balcony. The units will provide guests with a stovetop.'
), (
  'Central Apartments Maidan Area',
  2,
  2000,
  'Located within 200 metres of Maidan Nezalezhnosti Metro Station and 700 metres of St. Michael''s Golden-Domed Monastery, Central Apartments Maidan Area features rooms with air conditioning and a private bathroom in Kyiv. The property features city and inner courtyard views, and is 700 metres from Saint Sophia Cathedral.'
), (
  'Kyiv Loft Style Studois',
  1,
  1000,
  ''
)
