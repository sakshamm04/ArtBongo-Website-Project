// // BongoRepo.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Button,
//   Collapse,
//   List,
//   ListItem,
//   Input,
//   IconButton,
//   useToast
// } from '@chakra-ui/react';
// import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
// import './BongoRepo.css';

// function BongoRepo() {
//   // Sample repository data
//   const [repository, setRepository] = useState({
//     name: 'MyRepository',
//     files: [
//       { name: 'File1', type: 'file' },
//       { name: 'File2', type: 'file' },
//       {
//         name: 'Folder1',
//         type: 'folder',
//         files: [{ name: 'File3', type: 'file' }]
//       },
//       {
//         name: 'Folder2',
//         type: 'folder',
//         files: [{ name: 'File4', type: 'file' }]
//       }
//     ]
//   });

//   // State to manage active folder for dynamic rendering
//   const [activeFolder, setActiveFolder] = useState(null);
//   const [newFileName, setNewFileName] = useState('');
//   const [isCreatingFile, setIsCreatingFile] = useState(false);
//   const toast = useToast();

//   // Function to toggle active folder
//   const toggleFolder = (folderName) => {
//     setActiveFolder(activeFolder === folderName ? null : folderName);
//   };

//   // Function to handle file creation
//   const handleCreateFile = () => {
//     if (newFileName.trim() === '') {
//       toast({
//         title: 'Error',
//         description: 'File name cannot be empty',
//         status: 'error',
//         duration: 3000,
//         isClosable: true
//       });
//       return;
//     }

//     const newFile = { name: newFileName, type: 'file' };
//     setRepository((prevRepo) => ({
//       ...prevRepo,
//       files: [...prevRepo.files, newFile]
//     }));
//     setNewFileName('');
//     setIsCreatingFile(false);
//   };

//   // Function to handle file deletion
//   const handleDeleteFile = (fileName) => {
//     const updatedFiles = repository.files.filter((file) => file.name !== fileName);
//     setRepository((prevRepo) => ({ ...prevRepo, files: updatedFiles }));
//   };

//   // Function to handle file renaming
//   const handleRenameFile = (fileName, newFileName) => {
//     const updatedFiles = repository.files.map((file) =>
//       file.name === fileName ? { ...file, name: newFileName } : file
//     );
//     setRepository((prevRepo) => ({ ...prevRepo, files: updatedFiles }));
//   };

//   return (
//     <Box className="repo-container">
//       <Flex justify="space-between" align="center" className="repo-header">
//         <Heading size="md" color="white" fontFamily="fantasy">BongoRepo</Heading>
//         <Box flex="1" maxW="md" ml="4" className="search-bar">
//           <Input
//             variant="filled"
//             placeholder="Search files..."
//             bg="gray.800"
//             color="white"
//             _placeholder={{ color: 'white' }}
//           />
//           {/* Implement search functionality here */}
//         </Box>
//         <Button className="user-actions" bg="green">User actions</Button>
//       </Flex>

//       <Flex className="repo-content">
//         <Box className="sidebar">
//           <Text className="repo-name">Model Repository</Text>
//           <List className="sidebar-list">
//             {repository.files.map((file, index) => (
//               <ListItem key={index} className="list-item">
//                 {file.type === 'folder' ? (
//                   <Box onClick={() => toggleFolder(file.name)}>
//                     {file.name} {activeFolder === file.name ? '▲' : '▼'}
//                   </Box>
//                 ) : (
//                   <Flex align="center">
//                     <Box>{file.name}</Box>
//                     <IconButton
//                       ml="2"
//                       size="xs"
//                       aria-label="Delete file"
//                       icon={<DeleteIcon />}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleDeleteFile(file.name);
//                       }}
//                     />
//                     <IconButton
//                       ml="2"
//                       size="xs"
//                       aria-label="Edit file"
//                       icon={<EditIcon />}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         // Implement edit functionality
//                       }}
//                     />
//                   </Flex>
//                 )}
//                 <Collapse in={activeFolder === file.name}>
//                   <List ml="4" spacing={1}>
//                     {file.files &&
//                       file.files.map((subFile, subIndex) => (
//                         <ListItem key={subIndex}>{subFile.name}</ListItem>
//                       ))}
//                   </List>
//                 </Collapse>
//               </ListItem>
//             ))}
//           </List>
//           {isCreatingFile ? (
//             <Flex mt="2">
//               <Input
//                 size="sm"
//                 value={newFileName}
//                 onChange={(e) => setNewFileName(e.target.value)}
//                 placeholder="Enter file name"
//               />
//               <IconButton
//                 ml="2"
//                 size="sm"
//                 aria-label="Create file"
//                 icon={<AddIcon />}
//                 onClick={handleCreateFile}
//               />
//             </Flex>
//           ) : (
//             <Button mt="2" size="sm" onClick={() => setIsCreatingFile(true)}>
//               New File
//             </Button>
//           )}
//         </Box>

//         <Box className="repo-view">
//           <Box className="repo-breadcrumbs">
//             Home &gt; {activeFolder || 'Repository'}
//           </Box>
//           <Box className="repo-readme">Readme content</Box>
//         </Box>
//       </Flex>

//       <Box className="repo-footer">Make sure to update your changes before publishing your repository.</Box>
//     </Box>
//   );
// }

// export default BongoRepo;
// BongoRepo.jsx
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Collapse,
  List,
  ListItem,
  Input,
  IconButton,
  useToast
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {FaFolder} from 'react-icons/fa'
import './BongoRepo.css';

function BongoRepo() {
  // Sample repository data
  const [repository, setRepository] = useState({
    name: 'MyRepository',
    files: [
      { name: 'File1', type: 'file' },
      { name: 'File2', type: 'file' },
      {
        name: 'Folder1',
        type: 'folder',
        files: [{ name: 'File3', type: 'file' }]
      },
      {
        name: 'Folder2',
        type: 'folder',
        files: [{ name: 'File4', type: 'file' }]
      }
    ]
  });

  // State to manage active folder for dynamic rendering
  const [activeFolder, setActiveFolder] = useState(null);
  const [newFileName, setNewFileName] = useState('');
  const [isCreatingFile, setIsCreatingFile] = useState(false);
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const toast = useToast();

  // Function to toggle active folder
  const toggleFolder = (folderName) => {
    setActiveFolder(activeFolder === folderName ? null : folderName);
  };

  // Function to handle file creation
  const handleCreateFile = () => {
    if (newFileName.trim() === '') {
      toast({
        title: 'Error',
        description: 'File name cannot be empty',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
      return;
    }

    const newFile = { name: newFileName, type: 'file' };
    setRepository((prevRepo) => ({
      ...prevRepo,
      files: [...prevRepo.files, newFile]
    }));
    setNewFileName('');
    setIsCreatingFile(false);
  };

  // Function to handle folder creation
  const handleCreateFolder = () => {
    if (newFileName.trim() === '') {
      toast({
        title: 'Error',
        description: 'Folder name cannot be empty',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
      return;
    }

    const newFolder = { name: newFileName, type: 'folder', files: [] };
    setRepository((prevRepo) => ({
      ...prevRepo,
      files: [...prevRepo.files, newFolder]
    }));
    setNewFileName('');
    setIsCreatingFolder(false);
  };

  // Function to handle file deletion
  const handleDeleteFile = (fileName) => {
    const updatedFiles = repository.files.filter((file) => file.name !== fileName);
    setRepository((prevRepo) => ({ ...prevRepo, files: updatedFiles }));
  };

  // Function to handle file renaming
  const handleRenameFile = (fileName, newFileName) => {
    const updatedFiles = repository.files.map((file) =>
      file.name === fileName ? { ...file, name: newFileName } : file
    );
    setRepository((prevRepo) => ({ ...prevRepo, files: updatedFiles }));
  };

  return (
    <Box className="repo-container">
      <Flex
        justify="space-between"
        align="center"
        className="repo-header"
        border="1px solid #ccc"
        borderRadius="4px"
        padding="0.5rem"
        marginBottom="1rem"
      >
        <Heading size="md" color="white" fontFamily="fantasy">
          BongoRepo
        </Heading>
        <Box flex="1" maxW="md" ml="4" className="search-bar">
          <Input
            variant="filled"
            placeholder="Search files..."
            bg="gray.800"
            color="white"
            _placeholder={{ color: 'white' }}
          />
          {/* Implement search functionality here */}
        </Box>
        <Button className="user-actions" bg="green">
          User actions
        </Button>
      </Flex>

      <Flex className="repo-content">
        <Box className="sidebar" border="1px solid #ccc" borderRadius="4px" padding="0.5rem">
          <Text className="repo-name">Model Repository</Text>
          <List className="sidebar-list">
            {repository.files.map((file, index) => (
              <ListItem key={index} className="list-item">
                {file.type === 'folder' ? (
                  <Box onClick={() => toggleFolder(file.name)}>
                    <FaFolder />
                    {file.name} {activeFolder === file.name ? '▲' : '▼'}
                  </Box>
                ) : (
                  <Flex align="center">
                    <Box>{file.name}</Box>
                    <IconButton
                      ml="2"
                      size="xs"
                      aria-label="Delete file"
                      icon={<DeleteIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteFile(file.name);
                      }}
                    />
                    <IconButton
                      ml="2"
                      size="xs"
                      aria-label="Edit file"
                      icon={<EditIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Implement edit functionality
                      }}
                    />
                  </Flex>
                )}
                <Collapse in={activeFolder === file.name}>
                  <List ml="4" spacing={1}>
                    {file.files &&
                      file.files.map((subFile, subIndex) => (
                        <ListItem key={subIndex}>{subFile.name}</ListItem>
                      ))}
                  </List>
                </Collapse>
              </ListItem>
            ))}
          </List>
          {isCreatingFile ? (
            <Flex mt="2">
              <Input
                size="sm"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="Enter file name"
              />
              <IconButton
                ml="2"
                size="sm"
                aria-label="Create file"
                icon={<AddIcon />}
                onClick={handleCreateFile}
              />
            </Flex>
          ) : (
            <Button mt="2" size="sm" onClick={() => setIsCreatingFile(true)}>
              New File
            </Button>
          )}
          {isCreatingFolder ? (
            <Flex mt="2">
              <Input
                size="sm"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="Enter folder name"
              />
              <IconButton
                ml="2"
                size="sm"
                aria-label="Create folder"
                icon={<FolderIcon />}
                onClick={handleCreateFolder}
              />
            </Flex>
          ) : (
            <Button mt="2" size="sm" onClick={() => setIsCreatingFolder(true)}>
              New Folder
            </Button>
          )}
        </Box>

        <Box className="repo-view" border="1px solid #ccc" borderRadius="4px" padding="0.5rem" flex="1">
          {activeFolder && (
            <Box>
              <Text fontWeight="bold">{activeFolder}</Text>
              <List>
                {repository.files
                  .find((file) => file.name === activeFolder)
                  .files.map((subFile, index) => (
                    <ListItem key={index}>{subFile.name}</ListItem>
                  ))}
              </List>
            </Box>
          )}
        </Box>
      </Flex>

      <Box className="repo-footer" border="1px solid #ccc" borderRadius="4px" padding="0.5rem" textAlign="center">
        Make sure to update your changes before publishing your repository.
      </Box>
    </Box>
  );
}

export default BongoRepo;
