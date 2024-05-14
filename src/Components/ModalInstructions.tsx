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
        <p>1. Before playing, please select member status first.</p>
        {/* <p>2. Jawab dengan nama panggilan/nickname member.</p> */}
        <p>2. Answer with the member's <b>nickname</b> (referring to the <a href="https://jkt48.com/member/list" target="_blank">jkt48.com</a>).</p>
        {/* <p>3. Kamu bisa menekan tombol enter atau tombol submit untuk menjawab.</p> */}
        <p>3. You can press the <b>enter</b> or <b>submit</b> button to answer.</p>
        {/* <p>4. Jika tidak bisa menjawab bisa menekan tombol skip untuk melanjutkan.</p>   */}
        <p>4. If you can't answer, you can press the <b>skip</b> button to continue.</p>  
        {/* <p>5. Selamat bermain! Enjoyy.</p>   */}
        <p>5. Have fun and enjoy the game!</p>  
      </Modal.Body>
    </Modal>
  );
}
