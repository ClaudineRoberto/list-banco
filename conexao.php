
        <?php
        $servername = "10.125.44.38";
        $username = "usuariosistema";
        $password = "sis@123#456";
        $dbname = "sistema";

        $conn = mysqli_connect($servername, $username, $password, $dbname);

        if (!$conn) {
            die("Conexão falhou: " . mysqli_connect_error());
        }

        $sql = "SELECT * FROM clientes";
        $result = $conn->query($sql);

        $rows = array();
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }

        $json = json_encode($rows);
        echo $json;
        ?>