/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal } from "react-bootstrap";

export default function ModalInstructions({show, handleClose}: any) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" closeVariant="light">
      <Modal.Header className="justify-content-between">
        {/* <Modal.Title>Petunjuk Bermain</Modal.Title> */}
        <Modal.Title>Play Instructions</Modal.Title>
        <Button variant="" onClick={handleClose} >
            <img src="/img/x-lg.svg" alt="" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        {/* <p>1. Pilih status member terlebih dahulu untuk bermain.</p> */}
        <p>1. Select member status first to play.</p>
        {/* <p>2. Jawab dengan nama panggilan/nickname member.</p> */}
        <p>2. Answer with the member nickname.</p>
        {/* <p>3. Kamu bisa menekan tombol enter atau tombol submit untuk menjawab.</p> */}
        <p>3. You can press the enter button or the submit button to answer.</p>
        {/* <p>4. Jika tidak bisa menjawab bisa menekan tombol skip untuk melanjutkan.</p>   */}
        <p>4. If you can't answer, you can press the skip button to continue.</p>  
        {/* <p>5. Selamat bermain! Enjoyy.</p>   */}
        <p>5. Have a nice play! Enjoyy.</p>  
      </Modal.Body>
    </Modal>
  );
}
