import { smallData } from '../../mock-server/small-data';
import { setTestMode } from '../../src/app/config';

// import model

setTestMode(true);

test('Verifies Model Correctness', () => {
  //FIX THIS to assert the fetch call was made to the correct URL
  // https://circleci.com/blog/api-testing-with-jest/
  // https://zellwk.com/blog/endpoint-testing/
  // fetchDataWithLocation(1, 1, 1).then(res => {
  //   console.log('testing');
  //   response = res;
  // });
  //_setCachedData(smallData);
  // Note: View-Model testing will also use _setCachedData(smallData);
  //const cachedJSONObj = JSON.stringify(getCachedData());
  //expect(cachedJSONObj).toMatch(JSON.stringify(smallData));
});
