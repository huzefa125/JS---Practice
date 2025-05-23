<!-- tsak -1 -->

<script>
  const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task completed");
    }, 2000);
  });
  pro.then((message) => {
    console.log(message);
  });
</script>

<!-- task-2 -->

<script>
  const prom = new Promise((reject) => {
    setTimeout(() => {
      reject("There is Some error");
    }, 2000);
  });
  prom
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
</script>

<!-- task-3 -->

<script>
  function fetchStep(step, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Stel ${step}`);
      });
    });
  }

  fetchStep(1, 1000).then((message1) => {
    console.log(message1);
    return fetchStep(2, 1000);
  });
  fetchStep(2, 1000).then((message2) => {
    console.log(message2);
    return fetchStep(3, 1000);
  });
  fetchStep(3, 1000).then((message3) => {
    console.log(message3);
  });
</script>

<!-- task-4 -->

<script>
  function getdata() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data Recived");
      });
    });
  }

  async function fetchData(message) {
    const result = await getdata();
    console.log(result);
  }
  fetchData();
</script>

<script>
  function getdatas() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data recived Successully");
      }, 100);
    });
  }

  async function fetchDatas(message) {
    const re = await getdatas();
    console.log(re);
  }
  fetchDatas();
</script>

<!-- tesk-5 -->

<script>
  function getError() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Task me error");
      });
    });
  }
  async function handleFunction() {
    try {
      const result = await getError();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  handleFunction();
</script>
<!-- task-6 -->

<script>
  fetch("https://omdbapi.com/?s=thor&page=1&apikey=fc1fef96")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network respose was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("data recived", data);
    })
    .catch((error) => {
      console.log("Error fetching", error);
    });
</script>


<!-- task-7 -->

<script>
  async function fetchPost() {
    try{
      const response = await fetch("https://omdbapi.com/?s=stangerthings&page=1&apikey=fc1fef96");
      if (!response.ok) {
        throw new Error("Network Error")
      }
      const data = await response.json();
      console.log("data",data);
    }
    catch(error){
      console.log(error);
      
    }
}

fetchPost()
</script>

<!-- task-10 -->

<script>
  function createPromise(name,delay){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(`${name} Resolved`)
      },delay)
    })
  }

  const Promise1 = createPromise("Promise A",2000)
  const Promise2 = createPromise("Promise B",1500)
  const Promise3 = createPromise("Promise C",3000)

  Promise.all([Promise1,Promise2,Promise3])
  .then((result)=>{
    console.log(result);
  })
  .catch((error)=>{
    console.log(error);
  })
</script>

<!-- task-10 -->
 
<script>
  function createPromise(name,delay){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(`${name} Resolved`)
      },delay)
    })
  }

  const PromiseA = createPromise("Promise A",2000)
  const PromiseB = createPromise("Promise B",1500)
  const PromiseC = createPromise("Promise C",3000)

  Promise.race([PromiseA,PromiseB,PromiseC])
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })
</script>
