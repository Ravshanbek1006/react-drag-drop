import './App.css';
import React, { useState } from 'react';
import rasmcha from "../src/assets/rasmcha.png"


function App() {
  const [boards, setBoards] = useState([
    {
      id: 1, title: "Новые",
      items: [
        { id: 1, title: "UI/UX дизайнер", title_p: "Отдел разработки ", status: "В приоритете", person_length: 3, coment_length: 256, full_name: "Алексей Щербаков" },
        { id: 2, title: "Маркетолог", title_p: "Отдел маркетинга", status: "В приоритете", person_length: 3, coment_length: 182, full_name: "Floyd Miles" },
        { id: 3, title: "Менеджер по продажам", title_p: "Отдел продаж", status: "В приоритете", person_length: 3, coment_length: 256, full_name: "Theresa Webb" },
        { id: 4, title: "UI/UX дизайнер", title_p: "Отдел разработки", status: "В приоритете", person_length: 3, coment_length: 182, full_name: "Vanessa Johnson" },
      ]
    },
    {
      id: 2, title: "Текущие",
      items: [
        { id: 5, title: "PHP Developer", title_p: "Housekeepers", status: "В приоритете", person_length: 3, coment_length: 182, full_name: "Kristin Watson" },
        { id: 6, title: "Freshers", title_p: "Отдел маркетинга", status: " Второстепенная", person_length: 3, coment_length: 182, full_name: "Jacob Jones" },
        { id: 7, title: "UI UX Designer", title_p: "Отдел продаж", status: "В приоритете", person_length: 3, coment_length: 256, full_name: "Wade Warren " },
        { id: 8, title: "Joomla Developer", title_p: "Отдел разработки ", status: "В приоритете", person_length: 3, coment_length: 122, full_name: "Cameron Williamson" },
        { id: 9, title: "Python Developer", title_p: "Finance", status: " Второстепенная", person_length: 3, coment_length: 182, full_name: "Vanessa Johnson" },

      ]
    },
    {
      id: 3, title: "Закрытые",
      items: [
        
      ]
    },
    {
      id: 4, title: "Архив",
      items: [
        { id: 6, title: "UX Architect", title_p: "Housekeeping management", status: " Второстепенная", person_length: 3, coment_length: 182, full_name: "Guy Hawkins" },
        { id: 6, title: "Human Resource", title_p: " Operations", status: " Срочная заявка", person_length: 2, coment_length: 182, full_name: " Annette Black" },
        { id: 6, title: "Python Developer", title_p: " Restaurant Management", status: " Restaurant Management", person_length: 3, coment_length: 255, full_name: " Esther Howard" },

        { id: 6, title: "Freshers", title_p: " маркетинга", status: " Второстепенная", person_length: 3, coment_length: 182, full_name: " Jones" },

        
      ]
    },
    {
      id: 5, title: "Удаленные",
      items: [
        { id: 6, title: "Менеджер по продажам", title_p: " Отдел продаж", status: " Отдел продаж", person_length: 3, coment_length: 182, full_name: " Алексей Щербаков" },
        { id: 6, title: "Менеджер по продажам", title_p: " Отдел продаж", status: " Отдел продаж", person_length: 3, coment_length: 182, full_name: " Алексей Щербаков" },
        { id: 6, title: "Менеджер по продажам", title_p: " Отдел продаж", status: " Отдел продаж", person_length: 3, coment_length: 182, full_name: " Алексей Щербаков" },
        { id: 6, title: "Менеджер по продажам", title_p: " Отдел продаж", status: " Отдел продаж", person_length: 3, coment_length: 182, full_name: " Алексей Щербаков" },
        { id: 6, title: "Менеджер по продажам", title_p: " Отдел продаж", status: " Отдел продаж", person_length: 3, coment_length: 182, full_name: " Алексей Щербаков" },      
      ]
    },

  ])

  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function dragOverHendler(e) {
    e.preventDefault();
    if (e.target.className == "item") {
      e.target.style.boxShadow = "0 4px 3px gray"
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none"

  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board)
    setCurrentItem(item)
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = "none"

  }

  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)

    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex + 1, 0, currentItem)
    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    }))
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)

    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    }))
  }

  return (
    <div className="app">
    <div className='green_card'></div>
    <div className='row'>
      <div className='col-1 bg-white'></div>
      <div className='col-11 navbarr '>
      <h2>Заявки: {boards[0].items.length + boards[1].items.length + boards[2].items.length + boards[3].items.length+boards[4].items.length}</h2>
      <div className='d-flex home px-1'>
      {
        boards.map((board, index) =>
          <div
            className='board'
            key={index}
            onDragOver={(e) => dragOverHendler(e)}
            onDrop={e => dropCardHandler(e, board)}

          >
            <div className='board__title'>{board.title}: {board.items.length}</div>

           <div className='boardScrolBox'>
           {board.items.length == 0 ?
              <div className='d-flex flex-column align-items-center'>
                <img className='mt-5' src={rasmcha} alt = "logo" />
                <h5 className='mt-3'>Если есть подходящие заявки, перетащите их сюда 🤓</h5>
              </div>
              :
              <div>
                {board.items.map((item, index) =>
                  <div className='item'
                    key={index}
                    onDragOver={(e) => dragOverHendler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDragEnd={e => dragEndHandler(e)}
                    onDrop={e => dropHandler(e, board, item)}
                    draggable={true}
                  >
                  <div className='row'>
                    <div className='col-10   '>
                        <h3>{item.title}</h3>
                        <p>{item.title_p}</p>
                    </div>
                    <div className='col-2 '>
                      <h6>.</h6>
                      <h6>.</h6>
                      <h6>.</h6>
                    </div>
                    <div className='row mx-1 mt-2'>
                      <button className='btn_b  '>Второстепенная</button>
                      <div className='person'> <i class="bi bi-person"></i> {item.person_length} </div>
                      <div className='person'> <i class="bi bi-file-earmark-text"></i> {item.coment_length} </div>
                    </div>
                    <div className='row mx-2 mt-2'>
                        <div className='col-2 p-0'> 
                            <img className=' rounded-circle' src='https://randomuser.me/api/portraits/men/74.jpg' />
                        </div>
                        <div className='col-10 mt-2 '>
                            <p>Рекруитер</p>
                            <span>{item.full_name}</span>
                        </div>
                    </div>
                  </div>
                  </div>
                )}
              </div>
            }
           </div>

          </div>)
      }
      </div>
      </div>

    </div>
      
    </div>
  );
}

export default App;
