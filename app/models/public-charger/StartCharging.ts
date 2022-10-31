import { ChargerStation } from './ChargerStationType';

/** EXAMPLE:
POST https://example.ev.energy/chargingsession

{
	"user": 1, # You can hardcode this value
	"car_id": 1, # You can hardcode this value
	"charger_id": 123 # The ChargePointID from openchargemap
}
 */
export async function startCharging(model: ChargerStation) {
  const postURL = 'https://example.ev.energy/chargingsession';

  const payload = {
    user: 1, //# You can hardcode this value
    car_id: 1, //# You can hardcode this value
    charger_id: model.ID, //# The ChargePointID from openchargemap
  };

  console.log('StartCharging:');
  console.log(payload);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };

  await fetch(postURL, requestOptions)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(_err => {
      console.log('Failed to POST startCharging to the server.');
    });
  return { err: 'Server Error please try again later.' };
}
