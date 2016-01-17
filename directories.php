<?php

$folder = $_POST['path'];

$flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::SKIP_DOTS | FilesystemIterator::UNIX_PATHS;
$d_iterator = new RecursiveDirectoryIterator($folder, $flags);

$directories = array();
foreach ($d_iterator as $file) {
    if ($d_iterator->isDir()) {
        $directories[] = $d_iterator->getFileName();
    }
}

echo json_encode($directories);
