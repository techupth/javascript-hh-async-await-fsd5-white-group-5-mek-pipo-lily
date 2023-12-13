// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here

async function getData() {
  try {
    let firstFetch = await getJohnProfile();
    console.log(firstFetch);
  } catch (error) {
    console.log(error);
  }
}

getData();
