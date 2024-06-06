async function fetchHeaderDetails() {
    console.log(performance.now());
    const userDetails = await fetch("https://fakestoreapi.com/users/1");
    const cartDetails = await fetch("https://fakestoreapi.com/carts/user/2");
    console.log(await userDetails.json(), await cartDetails.json());
    console.log(performance.now());
}

fetchHeaderDetails();


async function fetchHeaderDetailsParallel() {
    console.log(performance.now());
    const data = await Promise.all([fetch("https://fakestoreapi.com/users/1")],[fetch("https://fakestoreapi.com/carts/user/2")]);
    console.log(data);
    console.log(performance.now());
}

fetchHeaderDetailsParallel();
