import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            <div className="app-container">
                <header>
                    <h1 className="app-title">GifExpertApp</h1>
                </header>

                <AddCategory
                    onNewCategory={(value) => onAddCategory(value)}
                />

                <main className="categories-container">
                    {
                        categories.map((category) => (
                            <GifGrid
                                key={category}
                                category={category}
                            />
                        ))
                    }
                </main>
            </div>

        </>
    )
}
