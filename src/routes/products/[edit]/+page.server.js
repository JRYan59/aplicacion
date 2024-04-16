/** @type {import('./$types').Actions} */
/** @type {import('./$types').PageLoad} */
export const actions = {
    save: async ({ request }) => {
        try {
            let form = await request.formData();
            let data = Object.fromEntries(form.entries());
            console.log(data);
            const response = await fetch('http://localhost:3000/products', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                console.log('Producto actualizado exitosamente');
            } else {
                console.error('Error al actualizar el producto:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    }
}
export async function load({fetch,params}) {
    const response = await fetch('http://localhost:3000/products/'+params.edit);
    console.log('http://localhost:3000/products/'+params.edit)
    // let params = params;
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return {
            product: data,
        }
    }
}