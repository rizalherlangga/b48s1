function submitData(Event) {
    Event.preventDefault()

    let name = document.getElementById("name").value
    let mail = document.getElementById("email").value
    let no = document.getElementById("no").value
    let subject = document.getElementById('sub').value
    let message = document.getElementById("message").value

    let objectData = {
        name,
        mail,
        no,
        subject,
        message
    }

    console.log(objectData)

    let say = [];

  if (name == "") {
    say.push("name");
  }
  if (mail == "") {
    say.push("mail");
  }
  if (no == "") {
    say.push("no");
  }
  if (subject == "") {
    say.push("subject");
  }
  if (message == "") {
    say.push("message");
  }

  if (say.length > 0) {
    let hay = say.join(", ");
    alert(`Kolom ${hay} semuanya harus diisi ya bang!`);
    return;
  }

    const emailReceiver = "rizsut03@gmail.com"

    let a = document.createElement("a")

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan kontak saya di nomor berikut : ${no}`
    a.click()
}