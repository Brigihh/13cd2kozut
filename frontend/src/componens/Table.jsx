import React from 'react';
const Table = () => {

    return (
        <>
            <div>Tábla const komponens</div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            John Doe
                        </td>
                        <td>
                            28
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Jane Smith
                        </td>
                        <td>
                            34
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};