import { RandomStationNamesRequest, User, UserStatus } from "../proto/users_pb";
import getUser from "./get-user";
import createUsers from "./create-users";
import allUsers from "./all-users";
import { clientStations } from "./utils";

async function run() {
  const user = await getUser(1);
  console.log(user.toString());

  const jim = new User();
  jim.setName("Jim");
  jim.setAge(10);
  jim.setId(20);
  jim.setStatus(UserStatus.OFFLINE);
  createUsers([jim]);
  console.log(`\nCreated user ${jim.toString()}`);

  const users = await allUsers();
  console.log(`\nListing all ${users.length} users`);
  for (const user of users) {
    console.log(user.toString());
  }

  const stationsRequest = new RandomStationNamesRequest();
  stationsRequest.setCount(20);
  stationsRequest.setRegion('uk');
  await clientStations.getRandomStationNames(stationsRequest, (err, stationNames) => {
    console.log(stationNames?.getNameList());
  })
}

run();