export const fetchData = async (url) => {
    try {
        const response = await fetch(url); 
        if (!response.ok) throw new Error("Error in the request");
        return await response.json();
    } catch (error) {
        throw error; 
    }
};
