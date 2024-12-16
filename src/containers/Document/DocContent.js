import React, { useState, useEffect } from 'react';
import webSocketService from "../../apis/WebSocketService";
import DocumentEditor from "../../components/Common/DocumentEditor";

const DocContent = ({ title }) => {
  const [documentData, setDocumentData] = useState([
    { id: '1', content: 'Welcome to the editor!' },
  ]);
  const [syncStatus, setSyncStatus] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    // 웹 소켓 연결
    webSocketService.connect();

    // 컴포넌트 언마운트 시 웹 소켓 연결 종료
    return () => {
      webSocketService.disconnect();
    };
  }, []);

  const handleDocumentChange = (updatedBlocks) => {
    setDocumentData(updatedBlocks);
    if (!isSyncing) {
      syncDocument(updatedBlocks);
    }
  };

  const syncDocument = (updatedBlocks) => {
    setIsSyncing(true);
    setSyncStatus('동기화 중...');

    webSocketService.sendMessage(JSON.stringify(updatedBlocks));

    setTimeout(() => {
      setSyncStatus('동기화 완료');
      setIsSyncing(false);
    }, 2000); // 2초 후 동기화 완료로 처리
  };

  return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>{title}</h1>
        <DocumentEditor
            initialContent=""
            onContentChange={handleDocumentChange}
        />
        {syncStatus && (
            <p style={{ color: syncStatus === '동기화 완료' ? 'green' : 'orange' }}>
              {syncStatus}
            </p>
        )}
      </div>
  );
};

export default DocContent;
