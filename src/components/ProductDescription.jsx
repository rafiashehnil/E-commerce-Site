import React from 'react';

const ProductDescription = () => {
    return (
        <div className="mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-wrap gap-3 mb-6">
                <button className="bg-gray-900 text-white rounded-none text-xs py-2 px-4 w-32 md:w-36">Description</button>
                <button className="border-2 border-gray-900 text-gray-900 bg-transparent rounded-none text-xs py-2 px-4 w-32 md:w-36 hover:bg-gray-900 hover:text-white transition duration-300">Care Guide</button>
                <button className="border-2 border-gray-900 text-gray-900 bg-transparent rounded-none text-xs py-2 px-4 w-32 md:w-36 hover:bg-gray-900 hover:text-white transition duration-300">Size Guide</button>
            </div>
            <div className="flex flex-col pb-10 md:pb-16">
                <p className="text-sm leading-relaxed text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Molestiae dicta adipisci nihil deserunt delectus? Dignissimos, numquam eum, voluptates reiciendis ipsa maxime enim quasi praesentium est totam neque dolores quam placeat commodi corporis repudiandae repellat assumenda amet doloremque modi! Non magnam id animi eveniet aperiam minus itaque voluptate voluptas! At aliquid fugit, hic consectetur itaque similique?
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Laborum optio iusto alias maiores obcaecati tempora, error beatae, aperiam, nisi recusandae illum. Eveniet, magnam ab dolorem possimus tenetur vel!
                </p>
            </div>
        </div>
    );
};

export default ProductDescription;

