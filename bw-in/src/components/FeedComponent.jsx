import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [token] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI2ZGFjZDgyNzdiODAwMTkyYzkwY2UiLCJpYXQiOjE3MDY0ODIzODEsImV4cCI6MTcwNzY5MTk4MX0.8oohtDRnu27ShzaAsm3TmrTH_wSc2Gsdmbi_uyCaIxo"); // Sostituisci con il tuo token effettivo

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://striveschool-api.herokuapp.com/api/posts/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data.reverse());
    } catch (error) {
      console.error('Errore nel recupero dei post:', error);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingPostId) {
        await axios.put(
          `https://striveschool-api.herokuapp.com/api/posts/${editingPostId}`,
          {
            text: newPostText,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEditingPostId(null);
        setNewPostText(''); // Resetta il campo di input dopo la modifica
      } else {
        await axios.post(
          'https://striveschool-api.herokuapp.com/api/posts/',
          {
            text: newPostText,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setNewPostText('');
      }

      fetchPosts();
    } catch (error) {
      console.error('Errore durante la gestione del post:', error.response.data);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Post eliminato con successo');
      fetchPosts();
    } catch (error) {
      console.error('Errore durante l\'eliminazione del post:', error);
    }
  };

  const handleEditPost = (postId) => {
    setEditingPostId(postId);
    const postToEdit = posts.find(post => post._id === postId);
    setNewPostText(postToEdit.text);
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setNewPostText('');
  };

  const isCurrentUserPostAuthor = (post) => {
    return post.user._id === '65b6dacd8277b800192c90ce';
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <Form onSubmit={handlePostSubmit}>
            <Form.Group controlId="newPostText">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Cosa hai in mente?"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
              />
            </Form.Group>
            <Button variant="info" type="submit">
              {editingPostId !== null ? 'Salva Modifica' : 'Crea Post'}
            </Button>
          </Form>
          <hr />
          {posts.map((post) => (
            <Card key={post._id} className="mb-3">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {new Date(post.createdAt).toLocaleString()}
                </Card.Subtitle>
                <Card.Img
                  variant="top"
                  style={{ width: '50px', float: 'left' }}
                  className="me-3"
                  src={post.user.image}
                  alt={`${post.user.name} ${post.user.surname}`}
                />
                <Card.Title>{post.user.name} {post.user.surname}</Card.Title>
                {editingPostId === post._id ? (
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                  />
                ) : (
                  <Card.Text>{post.text}</Card.Text>
                )}
                <Card.Subtitle className="mb-2 text-muted">{post.user.title}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{post.user.bio}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{post.user.area}</Card.Subtitle>
                {isCurrentUserPostAuthor(post) && (
                  <>
                    {editingPostId === post._id ? (
                      <>
                        <Button variant="primary" type="button" className="float-end me-2" onClick={handlePostSubmit}>
                          Salva Modifica
                        </Button>
                        <Button
                          variant="warning"
                          className="float-end me-2"
                          onClick={handleCancelEdit}
                        >
                          Annulla Modifica
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="danger"
                          size="sm"
                          className="float-end"
                          onClick={() => handleDeletePost(post._id)}
                        >
                          <Trash />
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          className="float-end me-2"
                          onClick={() => handleEditPost(post._id)}
                        >
                          Modifica
                        </Button>
                      </>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
