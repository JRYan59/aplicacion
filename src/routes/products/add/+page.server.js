/** @type {import('./$types').Actions} */
export const actions = {
    save: async ({ request }) => {
        try {
            let form = await request.formData();
            let data = Object.fromEntries(form.entries());
            console.log(data);
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                console.log('Producto agregado exitosamente');
            } else {
                console.error('Error al agregar el producto:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    }
}
