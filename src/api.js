export function getApartments(priceSorting, roomsFilter) {
  return fetch(
    "/apartments?" +
      new URLSearchParams({
        price: priceSorting,
        rooms: roomsFilter,
      }),
  ).then((res) => {
    if (res.ok) return res.json();
    else throw Error(res.status + " " + res.statusText);
  });
}

export function addApartment(newApartment) {
  return fetch("/apartments", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newApartment),
  }).then((res) => {
    if (res.ok) return res.json();
    else throw Error(res.status + " " + res.statusText);
  });
}

export function deleteApartment(apartment) {
  return fetch(`/apartments/${apartment.id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) return;
    else throw Error(res.status + " " + res.statusText);
  });
}
