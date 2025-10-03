import { Button } from '../ui/button';
import data from '../../utils/products.json';
import type { Product } from '@/types/product.types';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();
    const products: Product[] = data;
    const product = products.find((p) => p.id === Number(id));

    if (!product) return <h1>Product not found!</h1>;

    return (
        <div className='container mx-auto p-6'>
            {/* Основной блок: фото + информация */}
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                {/* Фото товара */}
                <div className='space-y-4'>
                    <div className='aspect-square overflow-hidden rounded-lg bg-neutral-800'>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='flex gap-2'>
                        {/* превьюшки */}
                        <div className='h-20 w-20 rounded-md bg-neutral-700'></div>
                        <div className='h-20 w-20 rounded-md bg-neutral-700'></div>
                        <div className='h-20 w-20 rounded-md bg-neutral-700'></div>
                    </div>
                </div>

                {/* Инфо о товаре */}
                <div className='flex flex-col gap-6'>
                    <h1 className='text-3xl font-bold'>{product.name}</h1>
                    <p className='text-2xl font-semibold text-green-400'>
                        ${product.price}
                    </p>

                    {/* Опции */}
                    <div className='space-y-3'>
                        <div>
                            <p className='mb-1 text-sm text-gray-400'>Color</p>
                            <div className='flex gap-2'>
                                <button className='h-8 w-8 rounded-full bg-red-500'></button>
                                <button className='h-8 w-8 rounded-full bg-blue-500'></button>
                                <button className='h-8 w-8 rounded-full bg-green-500'></button>
                            </div>
                        </div>
                        <div>
                            <p className='mb-1 text-sm text-gray-400'>Size</p>
                            <div className='flex gap-2'>
                                <button className='rounded border px-3 py-1'>
                                    S
                                </button>
                                <button className='rounded border px-3 py-1'>
                                    M
                                </button>
                                <button className='rounded border px-3 py-1'>
                                    L
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Добавление в корзину */}
                    <div className='flex items-center gap-4'>
                        <input
                            type='number'
                            defaultValue={1}
                            className='w-16 rounded border px-2 py-1 text-center'
                        />
                        <Button className='flex-1'>Add to Cart</Button>
                    </div>

                    {/* Краткое описание */}
                    <div>
                        <p className='text-gray-300'>
                            {product.shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Табы */}
            <div className='mt-12'>
                <div className='mb-6 flex gap-6 border-b pb-2'>
                    <button className='font-semibold'>Description</button>
                    <button className='text-gray-400'>Reviews</button>
                </div>
                <div>
                    <p className='leading-relaxed text-gray-300'>
                        {product.fullDescription}
                    </p>
                </div>
            </div>

            {/* Похожие товары */}
            <section className='mt-16'>
                <h2 className='mb-6 text-2xl font-bold'>Related Products</h2>
                <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
                    <div className='h-48 rounded bg-neutral-800'></div>
                    <div className='h-48 rounded bg-neutral-800'></div>
                    <div className='h-48 rounded bg-neutral-800'></div>
                    <div className='h-48 rounded bg-neutral-800'></div>
                </div>
            </section>
        </div>
    );
}

export default ProductPage;
