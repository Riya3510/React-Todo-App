
/*import React, { useState, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";

import { AiFillDelete } from "react-icons/ai";

const localdata = () => {

  let list = localStorage.getItem("data");
  if(list){
    return JSON.parse(localStorage.getItem("data"))
  }
  else{
    return [];
  }
}

const App = () => {

  const [input,setinput] =useState("");
const [item,setitem] =useState(localdata());
const [togglebtn, settogglebtn]  =useState(true)
const [isedit, setisedit] =useState(null);

const removeall = ()=>{
  setitem([]);
}
const deletedata =(id)=>{

  const updateitem = item.filter((val,index) => {
    return val.id!==id
  })
  setitem(updateitem)
}


  
const editdata =(id) => {

let newdata = item.find((elem) =>{
  return elem.id ===id
})
settogglebtn(false)
setinput(newdata.name)
setisedit(id)
}

const itemsadded =() => {
    if(!input){

      alert("pls filled something into input box");
    }


    else if(input && !togglebtn){
      setitem(item.map((elem)=>{
        if(elem.id === isedit){
          return {...elem, name:input}
        }
        return elem;
      }))
      settogglebtn(true);
      setinput("");
      setinput(null);

    }

    else{
      const inputdata = {id:new Date().getTime().toString(),name:input}
      setitem([...item,inputdata]);
      setinput("");
    }
  }

  useEffect(()=>{

    localStorage.setItem("data", JSON.stringify(item))
  })
  return(

    <div className = 'bg-[#061525] w-[100%] h-[100vh] flex flex-col justify-center items-center'>
    <div className = 'w-[400px] h-[60px] flex'>
    <input type ="text" value={input}
onChange={ (e) => setinput(e.target.value)}

    className= 'w-[300px] h-[60px] rounded-1g index indent-6 font-bold text-xl'/>
    {
      togglebtn ? <GrAdd className ='bg-white mt-4 ml-[-2rem] text-[1.3rem]'
      onClick={itemsadded}/>
:<AiFillEdit onClick={itemsadded} className = 'bg-white mt-4 ml-[-2rem] text-[1.3rem]'/>
    }
    </div>
    <div>
      {

        item.map((val,index) => (
<div className='text-white font-semibold bg-[#101298] w-[300px] h-[60px] mt-[2rem] ml-[-6rem] rounded-1g p-4 flex justify-between'>

  <h1> {val.name}</h1>

  <AiFillDelete onClick = {() => deletedata(val.id)}/>
  
  <AiFillEdit className = 'ml-[-10rem]' onClick={() => editdata(val.id)}/>

</div>

        ))

      }
      
          

            
          
      
    </div>
    <div className ='bg-white w-[200px] mt-3 ml-[-3.5rem] p-2 text-center font-extrabold rounded-full h-[40px]'>
      <button onClick={removeall}>Remove all</button>
    </div>
    </div>
  )
}

export default App*/

/*import React, { useState, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const localdata = () => {
  let list = localStorage.getItem("data");
  return list ? JSON.parse(list) : [];
};

const App = () => {
  const [input, setinput] = useState("");
  const [priority, setpriority] = useState("Low");
  const [item, setitem] = useState(localdata());
  const [togglebtn, settogglebtn] = useState(true);
  const [isedit, setisedit] = useState(null);

  const removeall = () => {
    setitem([]);
  };

  const deletedata = (id) => {
    const updateitem = item.filter((val) => val.id !== id);
    setitem(updateitem);
  };

  const editdata = (id) => {
    let newdata = item.find((elem) => elem.id === id);
    settogglebtn(false);
    setinput(newdata.name);
    setpriority(newdata.priority || null);
    setisedit(id);
  };

  const itemsadded = () => {
    if (!input) {
      alert("Please fill something into the input box");
    } else if (input && !togglebtn) {
      setitem(
        item.map((elem) => {
          if (elem.id === isedit) {
            return { ...elem, name: input, priority };
          }
          return elem;
        })
      );
      settogglebtn(true);
      setinput("");
      setpriority(null);
      setisedit(null);
    } else {
      const inputdata = { id: new Date().getTime().toString(), name: input, priority };
      setitem([...item, inputdata]);
      setinput("");
      setpriority(null);
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  }, [item]);

  return (
    <div className="bg-[#061525] w-[100%] h-[100vh] flex flex-col justify-center items-center ">
      <div className="w-[300px] h-[60px] flex mb-4 relative ml-100">
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              itemsadded();
            }}}
          className="w-[300px] h-[60px] rounded-lg indent-10 font-bold text-xl pr-10 mr-3"
          placeholder="Enter task"
        />
        <select
           value={priority || ""}
          onChange={(e) => setpriority(e.target.value)}
          className="w-[100px] h-[60px] rounded-lg font-bold text-xl mr-100"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        {togglebtn ? (
          <GrAdd className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[1.5rem] cursor-pointer"
 onClick={itemsadded}/>
        ) : (
          <AiFillEdit className="bg-white mt-4 ml-[-2rem] text-[1.3rem]" onClick={itemsadded} />
        )}
      </div>

      <div>
        {item.map((val) => (
          <div
            key={val.id}
            className="text-white font-semibold bg-[#101298] w-[300px] h-[60px] mt-[1rem] rounded-lg p-4 flex justify-between items-center"
          >
            <h1>{val.name} ({val.priority})</h1>
            <div className="flex gap-4">
              <AiFillEdit onClick={() => editdata(val.id)} />
              <AiFillDelete onClick={() => deletedata(val.id)} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white w-[200px] mt-4 p-2 text-center font-extrabold rounded-full h-[40px]">
        <button onClick={removeall}>Remove all</button>
      </div>
    </div>
  );
};

export default App;*/

/*import React, { useState, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const localdata = () => {
  let list = localStorage.getItem("data");
  return list ? JSON.parse(list) : [];
};

const App = () => {
  const [input, setinput] = useState("");
  const [priority, setpriority] = useState(null); // Set default to null
  const [item, setitem] = useState(localdata());
  const [togglebtn, settogglebtn] = useState(true);
  const [isedit, setisedit] = useState(null);

  const removeall = () => {
    setitem([]);
  };

  const deletedata = (id) => {
    const updateitem = item.filter((val) => val.id !== id);
    setitem(updateitem);
  };

  const editdata = (id) => {
    let newdata = item.find((elem) => elem.id === id);
    settogglebtn(false);
    setinput(newdata.name);
    setpriority(newdata.priority || null); // Set to null if no priority
    setisedit(id);
  };

  const itemsadded = () => {
    if (!input) {
      alert("Please fill something into the input box");
    } else if (input && !togglebtn) {
      setitem(
        item.map((elem) => {
          if (elem.id === isedit) {
            return { ...elem, name: input, priority };
          }
          return elem;
        })
      );
      settogglebtn(true);
      setinput("");
      setpriority(null); // Reset to null after editing
      setisedit(null);
    } else {
      const inputdata = { id: new Date().getTime().toString(), name: input, priority: priority || undefined }; // Only include priority if it's set
      setitem([...item, inputdata]);
      setinput("");
      setpriority(null); // Reset priority to null after adding
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  }, [item]);

  return (
    <div className="bg-[#061525] w-[100%] h-[100vh] flex flex-col justify-center items-center ">
      <div className="w-[300px] h-[60px] flex mb-4 relative ml-100">
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              itemsadded();
            }}}
          className="w-[300px] h-[60px] rounded-lg indent-10 font-bold text-xl pr-10 mr-3"
          placeholder="Enter task"
        />

        <select
          value={priority || ""} // If priority is null, the select will have no value
          onChange={(e) => setpriority(e.target.value)}
          className="w-[100px] h-[60px] rounded-lg font-bold text-xl mr-3"  >
          <option value="" disabled>Select</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      
        {togglebtn ? (
          <GrAdd className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[1.5rem] cursor-pointer" onClick={itemsadded} />
        ) : (
          <AiFillEdit className="bg-white mt-4 ml-[-2rem] text-[1.3rem]" onClick={itemsadded} />
        )}
      </div>

      <div>
        {item.map((val) => (
          <div
            key={val.id}
            className="text-white font-semibold bg-[#101298] w-[300px] h-[60px] mt-[1rem] rounded-lg p-4 flex justify-between items-center"
          >
            <h1>{val.name} {val.priority && `(${val.priority})`}</h1> 
            <div className="flex gap-4">
              <AiFillEdit onClick={() => editdata(val.id)} />
              <AiFillDelete onClick={() => deletedata(val.id)} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white w-[200px] mt-4 p-2 text-center font-extrabold rounded-full h-[40px]">
        <button onClick={removeall}>Remove all</button>
      
      </div>
    </div>
  );
};

export default App;*/

import React, { useState, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const localdata = () => {
  let list = localStorage.getItem("data");
  return list ? JSON.parse(list) : [];
};

const App = () => {
  const [input, setinput] = useState("");
  const [priority, setpriority] = useState(null); 
  const [item, setitem] = useState(localdata());
  const [togglebtn, settogglebtn] = useState(true);
  const [isedit, setisedit] = useState(null);

  const removeall = () => {
    setitem([]);
  };

  const deletedata = (id) => {
    const updateitem = item.filter((val) => val.id !== id);
    setitem(updateitem);
  };

  const editdata = (id) => {
    let newdata = item.find((elem) => elem.id === id);
    settogglebtn(false);
    setinput(newdata.name);
    setpriority(newdata.priority || null);
    setisedit(id);
  };

  const itemsadded = () => {
    if (!input) {
      alert("Please fill something into the input box");
    } else if (input && !togglebtn) {
      setitem(
        item.map((elem) => {
          if (elem.id === isedit) {
            return { ...elem, name: input, priority };
          }
          return elem;
        })
      );
      settogglebtn(true);
      setinput("");
      setpriority(null);
      setisedit(null);
    } else {
      const inputdata = { id: new Date().getTime().toString(), name: input, priority };
      setitem([...item, inputdata]);
      setinput("");
      setpriority(null);
    }
  };


 
 
  const sortItems = (items) => {
    const priorityOrder = {
      High: 3,
      Medium: 2,
      Low: 1,
    };
    
    return items.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  }, [item]);

  return (
    <div className="bg-[#061525] w-[100%] h-[100vh] flex flex-col justify-center items-center ">

<h1 className="text-white font-extrabold text-7xl mb-10">My Task List</h1>
      <div className="w-[300px] h-[60px] flex mb-4 relative ml-100">
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}

          

         
          className="w-[300px] h-[60px] rounded-lg indent-10 font-bold text-xl pr-10 mr-3"
          placeholder="Enter task"
        />
      
          
          <select
            id="priority"
            value={priority || ""}
            onChange={(e) => setpriority(e.target.value)}
            className="w-[100px] h-[60px] rounded-lg font-bold text-xl"
          >
            <option value="" disabled>Select</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        
        {togglebtn ? (
          <GrAdd className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[1.5rem] cursor-pointer" onClick={itemsadded} />
        ) : (
          <AiFillEdit className="bg-white mt-4 ml-[-2rem] text-[1.3rem]" onClick={itemsadded} />
        )}
      </div>

      <div>
        {sortItems(item).map((val) => (
          <div
            key={val.id}
            className="text-white font-semibold bg-[#101298] w-[300px] h-[60px] mt-[1rem] rounded-lg p-4 flex justify-between items-center"
          >
           <h1>{val.name}{val.priority && ` (${val.priority})`}</h1>


            <div className="flex gap-4">
              <AiFillEdit onClick={() => editdata(val.id)} />
              <AiFillDelete onClick={() => deletedata(val.id)} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white w-[200px] mt-4 p-2 text-center font-extrabold rounded-full h-[40px]">
        <button onClick={removeall}>Remove all</button>
      </div>
    </div>
  );
};

export default App;

