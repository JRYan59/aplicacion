/** @type {import('./$types').Actions} */
/** @type {import('./$types').PageLoad} */
export const actions = {
    delete: async ({ request }) => {
        try {
            let form = await request.formData();
            let data = Object.fromEntries(form.entries());
            console.log(data);
            const response = await fetch('http://localhost:3000/products', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                console.log('Producto eliminado exitosamente');
            } else {
                console.error('Error al eliminar el producto:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error al eliminar el producto:', error);
        }

    }
}
export async function load({fetch,params}) {
    const response = await fetch('http://localhost:3000/products/'+params.delete);
    console.log('http://localhost:3000/products/'+params.delete)
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return {
            product: data,
        }
    }
}