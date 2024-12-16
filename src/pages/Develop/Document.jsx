import React from 'react';
import DocContent from "../../containers/Document/DocContent";

const Document = () => {
    const documentTitle = "My Awesome Document";

    return (
        <div>
            <DocContent title={documentTitle} />
        </div>
    );
};

export default Document;