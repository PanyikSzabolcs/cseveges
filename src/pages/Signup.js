import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import avatarImg from "../assets/avatar.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //kép feltöltés változók
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Maximum fájl méret 1 megabite");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

async function uploadImage(){
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'u8zswyfu');
    try {
      setUploadingImg(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/deeeqhoyx/image/upload', {
        method: 'POST',
        body: data
      })
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url
    } catch(error) {
      setUploadingImg(false)
      console.log(error);
    }
}

  async function handleSignup(e) {
    e.preventDefault();
    if(!image) return alert('Kérlek tölts fel egy profilképet!');
    const url = await uploadImage(image);
    console.log(url);
    //felhasználó regsiztrálása
  }

  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className="text-center">Profil létrehozása</h1>
            <div className="signup-profile-pic__container">
              <img src={imagePreview || avatarImg} className="signup-profile-pic" />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                onChange={validateImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Teljes Név</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add meg a neved"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email cím</Form.Label>
              <Form.Control
                type="email"
                placeholder="Add meg az email címed"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                Soha ne add meg az email címed vagy a jelszavad senkinek!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Jelszó</Form.Label>
              <Form.Control
                type="password"
                placeholder="Jelszó"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {uploadingImg ? 'Regisztráció folyamatban...' : 'Regisztráció'}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Van már fiókod? <Link to="/login">Bejelentkezés</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  );
}

export default Signup;
