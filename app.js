
el = (id)=>(
    document.getElementById(id)
)
    


let stringMessa = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur sed suscipit quae quidem. Veniam quas commodi sapiente officiis perspiciatis vero sunt ullam natus, rem, obcaecati maiores dolorum sit dolores!`

el('bioStyle').innerHTML = stringMessa.substring(0, 180); 

