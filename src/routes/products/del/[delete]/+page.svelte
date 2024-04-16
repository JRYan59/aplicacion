<script>
    export let data;
    let { product } = data;
    
    </script>
    
    <div class="main text-white flex flex-col justify-center items-center h-screen bg-neutral-950">
        <div class="container h-1/2 bg-slate-900 p-5 max-w-md w-full " >
    <form method="post" action="?/delete">
        <div class="mb-6">
            <label for="id" class="block  text-sm font-bold mb-2">Id:</label>
            <input type="text" bind:value={product.id} name="id" id="id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Descripcion">
          </div>
        <div class="mb-6">
          <label for="description" class="block  text-sm font-bold mb-2">Descripción:</label>
          <input type="text" bind:value={product.description} name="description" id="description"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Descripcion">
        </div>
        <div class="mb-6">
            <label for="price" class="block  text-sm font-bold mb-2">Precio:</label>
            <input type="text" bind:value={product.price} name="price" id="price"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Precio">
          </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
        </div>
      </form>
    </div>
    </div>
    