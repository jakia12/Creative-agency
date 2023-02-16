export const getServices = async () => {
    const res = await fetch('https://creeativeagency-server.vercel.app/services');
    const data = await res.json();
    return data;
}


//get single service by id

export const getSingleService = async (id) => {
    const res = await fetch(`https://creeativeagency-server.vercel.app/services/${id}`);
    const data = res.json();
    return data;
}