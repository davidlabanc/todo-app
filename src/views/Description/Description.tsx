import { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';
import _ from 'lodash';

import { TodoContext } from '../../shared/context/todo-context';
import { TodoInterface } from '../../ts/interfaces/app_interfaces';

var getTodoById = (id: String | undefined): Promise<TodoInterface> => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
};

var patchCompleted = (id: String, completed: Boolean): Promise<any> => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      completed: !completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
};

function Description() {
  const { todos, setCompleted } = useContext(TodoContext)
  const params = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState<TodoInterface>();

  useEffect(() => {
    (
      async () => {
        if (todo) return
        const getTodo = todos.find(item => item.id === params.id)

        if (!getTodo) {
          const data = await getTodoById(params.id)

          if (_.isEmpty(data)) {
            navigate("/")
          }

          setTodo(data)
        } else {
          setTodo(getTodo)
        }
      }
    )()
  }, [params.id, todos, todo]);


  const handleClick = useCallback((id: string | undefined, completed: Boolean | undefined) => {
    async function fetchMyAPI() {
      if (!id || completed === undefined) return

      let response = await patchCompleted(id, completed)
      setTodo(response)
      setCompleted(id, response)
    }

    fetchMyAPI()
  }, [params.id]);


  return (
    <>
      <Home to="/" className="first">
        <HomeIcon>&#8962;</HomeIcon> Home
      </Home>
      <Container>
        <Number>{todo?.id}.</Number>
        <Header>{todo?.title}</Header>
      </Container>
      <Detail><DetailDescription>Status: </DetailDescription>{todo?.completed ? " Completed" : " Not completed"}</Detail>
      <IconContainer>
        <Button className="first" onClick={() => handleClick(todo?.id, todo?.completed)}>
          &#10004;
        </Button>
      </IconContainer>
    </>
  )
}

export default Description;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
	display: flex;
  justify-content: flex-end;
`;

const HomeIcon = styled.span`
  font-size: 2.2rem;
  padding-right: 10px;
`;

const Home = styled(Link)`
  text-decoration: none;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
	width: max-content;
	text-align: center;
  background: #efefef;
  font-size: 1.8rem;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: #404040;
  font-size: ${props => props.size === "home" ? "2.2rem" : "1.2rem"};;
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: .2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15);
	&:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
}
&:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
              inset -2px -2px 4px rgba(255, 255, 255, .5),
              inset 2px 2px 2px rgba(255, 255, 255, .075),
              inset 2px 2px 4px rgba(0, 0, 0, .15);
}
`;

const Button = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
	width: 50px;
	height: 50px;
	text-align: center;
  background: #efefef;
  border: none;
  border-radius: 50%;
  color: #404040;
  font-size: ${props => props.size === "home" ? "2.2rem" : "1.2rem"};;
  font-weight: 600;
  font-weight: 700;
  letter-spacing: .2rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: .2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15);
	&:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
  }
  &:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
                inset -2px -2px 4px rgba(255, 255, 255, .5),
                inset 2px 2px 2px rgba(255, 255, 255, .075),
                inset 2px 2px 4px rgba(0, 0, 0, .15);
  }
`;

const Header = styled.div`
  font-size: 1.5em;
  padding-bottom: 20px;
  color: #404040;
  &::first-letter{
    text-transform: uppercase;
  }
`;

const Number = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #404040;
  padding-bottom: 20px;
  padding-right: 10px;
`;

const Detail = styled.div`
  font-size: 1.2em;
`;
const DetailDescription = styled.span`
  padding-right: 5px;
`;