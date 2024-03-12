<script>
let formData = {Codigo:"", Descripcion: "", Precio: "" };



    async function addObject() {
    try {
      console.log(formData);
      console.log(JSON.stringify({formData}))

      //Aqui se que  me revienta porque nisiquiera muestra el error ni ok.
      // const response = await fetch('http://localhost:3000/products', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      // });
      if (response.ok) {
        console.log('Producto agregado exitosamente');
        history.back();
      } else {
        console.error('Error al agregar el producto:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  }
</script>

<div class="main text-white flex flex-col justify-center items-center h-screen bg-neutral-950">
    <div class="container h-1/2 bg-slate-900 p-5 max-w-md w-full " >
<form on:submit={addObject}>
    <div class="mb-4">
      <label for="codigo" class="block text-sm font-bold mb-2">Codigo:</label>
      <input type="text" id="codigo" bind:value={formData.Codigo} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Codigo">
    </div>
    <div class="mb-6">
      <label for="descripcion" class="block  text-sm font-bold mb-2">Descripción:</label>
      <input type="text" id="descripcion" bind:value={formData.Descripcion} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Descripcion">
    </div>
    <div class="mb-6">
        <label for="precio" class="block  text-sm font-bold mb-2">Precio:</label>
        <input type="text" id="precio" bind:value={formData.Precio} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Precio">
      </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Agregar</button>
    </div>
  </form>
</div>
</div>