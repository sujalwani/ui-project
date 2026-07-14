import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {

  const users =[
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:" ",
      color:"blue",
      tag :"Satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:" ",
      color:"green",
      tag :"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:" ",
      color:"yellow",
      tag :"Underbanked"
    },
    {
      img:"https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:" ",
      color:"crem",
      tag :"Underbanked"
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
}

export default App;
