import React from "react";
import styles from "./conversation.module.css";
import Image from "next/image";

const RecievedMessage = () => {
  return (
    <div className={styles.received_msg_warpper}>
      <Image
        src="/assets/cat-profile.jpg"
        alt="profile image"
        width={20}
        height={20}
        className={styles.image}
        draggable={false}
      />
      <div className={styles.received_message}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ut
          quia eligendi dignissimos distinctio et deleniti modi possimus rerum
          ex omnis assumenda recusandae nobis voluptate ullam totam corporis,
          aperiam sunt minus mollitia? Nam voluptates culpa minus itaque quae
          deleniti labore!
        </p>
      </div>
    </div>
  );
};

export default RecievedMessage;
