# API Documentation

## Path

**POST** `/register`

---

## API

### Request



| **Model**            | **Example**                                                                                       |
|-----------------------|---------------------------------------------------------------------------------------------------|
| `email`: String       | `{"email":"username@example.com","password":["p","a","s","s","w","o","r","d"]}`                   |
| `password`: char[]    |           

#### Key Details

| **Key**     | **Required** | **Description**                                                                                             |
|-------------|--------------|-------------------------------------------------------------------------------------------------------------|
| `email`     | Yes          | Must be of the form `[email]@[domain].[extension]`, contain between 5-50 characters, and contain only alphanumeric characters. |
| `password`  | Yes          | Must be between [10-20] alphanumeric characters, with at least one uppercase letter, one lowercase letter, and one digit. |

---

### Response

| **Model**             | **Example**                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `result`: Result      | `{ "result": { "code": 1010, "message": "User registered successfully" } }`                     |
| `code`: Integer       | Part of the `result` object                                                                     |
| `message`: String     | Part of the `result` object                                                                         |

---

## Results

| **Status**           | **Code** | **Message**                                      |
|-----------------------|----------|-------------------------------------------------|
| 🟢 **200: OK**        | 1010     | User registered successfully                    |
| 🔴 **409: Conflict**  | 1011     | User with this email already exists             |
| 🔴 **400: Bad Request** | 1000     | Password does not meet length requirements      |
| 🔴 **400: Bad Request** | 1001     | Password does not meet character requirement    |
| 🔴 **400: Bad Request** | 1002     | Email address has invalid format               |
| 🔴 **400: Bad Request** | 1003     | Email address has invalid length               |

---

### Notes

- Use proper formatting to maintain consistency.
- Emojis help visually distinguish statuses (e.g., 🟢 for success, 🔴 for errors).

<table>
  <tr>
    <th>Model</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>
      <code>result: Result</code><br>
      <code>code: Integer</code><br>
      <code>message: String</code>
    </td>
    <td>
      <pre>
{
  "result": {
    "code": 1010,
    "message": "User registered successfully"
  }
}
      </pre>
    </td>
  </tr>
</table>
